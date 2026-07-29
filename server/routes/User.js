import express from "express";
import jwt from "jsonwebtoken";
import cookiesparser from "cookie-parser";

const router = express.Router();

import bcrypt from "bcrypt";
import Pool from "../config/db.js";

router.use(express.json());
router.use(cookiesparser());
router.use(express.urlencoded({ extended: true }));

let secret = "W$q4=25*8%v-}UV";
let RefreshTokenSecret = "W%&7=-^#-v}XL";

let generateAccess = (UserPayLoad) => {
  return jwt.sign(UserPayLoad, secret, { expiresIn: "15m" });
};

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const cleanEmail = email.trim().toLowerCase();
  if (!email || password.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Password  must be  filed",
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

router.get("/profile", async (req, res) => {
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

router.patch("/profile/edit", async (req, res) => {
  try {
    const userID = req.user.id;

    //   if(!title|| !price ||!description) {
    //   return res.status(400).json("Please Insert Valid inputs")
    //  }

    const { username, email, password } = req.body;
    const Result = await Pool.query(
      "SELECT user_id,username,email,password  FROM authors WHERE id=$1",
      [userID]
    );

    if (Result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `there is no item  with  this id  `,
      });
    }
    const exitingProfile = Result.rows[0];

    let updatedPasswordHash = exitingProfile.password_hash;
    if (password && password.trim() !== "") {
      updatedPasswordHash = await bcrypt.hash(password, 10);
    }
    const ItemsUpdates = `
UPDATE authors SET username=$1,email=$2,pasword_hash=$3 WHERE user_id=$5  RETURNING  user_Id,username,email`;

    const FinalResult = await Pool.query(ItemsUpdates, [
      username || exitingProfile.username,
      email ? exitingProfile.email.trim().toLowerCase() : exitingProfile.email,
      updatedPasswordHash,

      exitingProfile.user_id || userID,
    ]);

    return res.status(200).json({
      success: true,
      data: FinalResult.rows[0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json("Intrnal server error");
  }
});

export default router;
