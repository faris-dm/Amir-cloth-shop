import "dotenv/config"
import express from "express";
import jwt from "jsonwebtoken";
import cookiesparser from "cookie-parser";

const router = express.Router();

import bcrypt from "bcrypt";
import Pool from "../config/db.js";
// import { authenticate } from "passport";
import authenticateUser from "../middle/auth.js";

router.use(express.json());
router.use(cookiesparser());
router.use(express.urlencoded({ extended: true }));

let secret = process.env.JWT_ACCESS_SECRET;
let RefreshTokenSecret = process.env.JWT_REFRESH_SECRET;

let generateAccess = (UserPayLoad) => {
  return jwt.sign(UserPayLoad, secret, { expiresIn: "15m" });
};

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const cleanEmail = email.trim().toLowerCase();
  if (!email ||!password ||  password.trim() === "")  {
    return res.status(400).json({
      success: false,
      message: "Password/email  is required",
    });
  }
  if(!username || username.trim()=== "") {


  return res.status(400).json({
    success: false,
    message: "username is  required",
  });
  }
  try {
    const checkEmail = `SELECT user_id,username,email FROM  authors WHERE username =$1 OR email=$2`;

    const resultCheck = await Pool.query(checkEmail, [
      username.trim(),
      cleanEmail,
    ]);

    if (resultCheck.rows.length > 0) {
      console.log("⚠️ Username or Email is already taken.");
      return res
        .status(400)
        .json({ error: "Username or Email is already registered." });
    }

    const HashedPassword = await bcrypt.hash(password, 10);

    const saveData = `
        INSERT INTO authors (email,username,password_hash)
        VALUES ($1,$2,$3)
         RETURNING user_id,username,email
        `;

    const result = await Pool.query(saveData, [
      cleanEmail,
      username.trim(),
      HashedPassword,
    ]);
    const created = result.rows[0];

    const UserPayLoad = {
      id: created.user_id,
      email: created.email,
      
    };
    const userPayRefreshTokens = {
      email: cleanEmail,
    };

    let accessToken = generateAccess(UserPayLoad);
    const refreshToken = jwt.sign(userPayRefreshTokens, RefreshTokenSecret, {
      expiresIn: "7d",
    });

    // UserStorage.set(cleanEmail,NewUser)

    res.cookie("token", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });
    console.log("acccessToken Saved");

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",

      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(201).json({
      success: true,
      message: "Registration successful",
      user: {
        id: created.user_id,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const cleanEmail = email?.trim().toLowerCase();

  if (!cleanEmail || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password required" });
  }

  try {
    const result = await Pool.query(
      "SELECT user_id, username, email, password_hash FROM authors WHERE email=$1",
      [cleanEmail]
    );
    const user = result.rows[0];
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const payload = {
      id: user.user_id,
      email: user.email,
      username: user.username,
    };
    const accessToken = generateAccess(payload);
    const refreshToken = jwt.sign({ email: user.email }, RefreshTokenSecret, {
      expiresIn: "7d",
    });

    res.cookie("token", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, accessToken, user: payload });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});




router.post("/logout", (req, res) => {
  res.clearCookie("refreshToken");
  res.clearCookie("token");
  return res
    .status(200)
    .json({ success: true, message: "Logged out successfully" });
});

router.get("/profile", authenticateUser, async (req, res) => {
  try {
    const userID = req.user.id;
    const UserInfo = `SELECT user_id,username,email FROM authors WHERE user_id=$1`;
    const Result = await Pool.query(UserInfo, [userID]);

    if (Result.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    return res.status(200).json({
      success: true,
      count: Result.rows.length,
      data: Result.rows[0],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.patch("/profile/edit", authenticateUser, async (req, res) => {
  try {
    const userID = req.user.id;
    const { username, email, password } = req.body;

    const Result = await Pool.query(
      "SELECT user_id,username,email,password_hash FROM authors WHERE user_id=$1", // 🔧 fixed
      [userID]
    );

    if (Result.rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "there is no item with this id" });
    }
    const exitingProfile = Result.rows[0];

    let updatedPasswordHash = exitingProfile.password_hash;
    if (password && password.trim() !== "") {
      updatedPasswordHash = await bcrypt.hash(password, 10);
    }

    const ItemsUpdates = `
      UPDATE authors SET username=$1,email=$2,password_hash=$3 WHERE user_id=$4
      RETURNING user_id,username,email
    `; // 🔧 fixed: $5 -> $4

    const FinalResult = await Pool.query(ItemsUpdates, [
      username || exitingProfile.username,
      email ? email.trim().toLowerCase() : exitingProfile.email, // 🔧 fixed: use new email, not the old one
      updatedPasswordHash,
      userID, // 🔧 simplified — userID is already the authenticated user's id
    ]);

    return res.status(200).json({ success: true, data: FinalResult.rows[0] });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

export default router;
