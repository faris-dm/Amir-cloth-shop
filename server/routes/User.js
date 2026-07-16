import express from "express";
import jwt from "jsonwebtoken";
import cookiesparser from "cookie-parser";
import crypto from "crypto";
const router = express.Router();
router.use(cookiesparser());
import bcrypt from "bcrypt";
import Pool from "../config/db.js";

router.use(express.json());

router.use(express.urlencoded({ extended: true }));

let secret = "W$q4=25*8%v-}UV";
let RefreshTokenSecret = "W%&7=-^#-v}XL";

let generateAccess = (UserPayLoad) => {
  return jwt.sign(UserPayLoad, secret, { expiresIn: "15m" });
};

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const cleanEmail = email.trim().toLowerCase();
  if (!password || password.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Password  must be  filed",
    });
  }
  // if(UserStorage.has(cleanEmail)) {
  //    return res.status(409).json({
  //      success: false,
  //      message: "User already exists. Please log in.",
  //    });
  // }

  try {
    const checkEmail = `SELECT user_id,username,email FROM  Users WHERE username =$1 OR email=$2`;

    const resultCheck = await Pool.query(checkEmail, [username, email]);

    if (resultCheck.rows.length > 0) {
      console.log("⚠️ Username or Email is already taken.");
      return res
        .status(400)
        .json({ error: "Username or Email is already registered." });
    }

    const HashedPassword = await bcrypt.hash(password, 10);
    let user_id = crypto.randomUUID();

    const saveData = `
        INSERT INTO Users (email,username,password_hash)
        VALUES ($1,$2,$3)
         RETURNING user_id,username,password_hash
        `;

    const result = await Pool.query(saveData, [
      cleanEmail,
      username,
      HashedPassword,
    ]);
    const created = result.rows[0];

    const UserPayLoad = {
      id: created.user_id,
      email: cleanEmail,
    };
    const userPayRefreshTokens = {
      email: cleanEmail,
    };

    let accessToken = generateAccess(UserPayLoad);
    const refreshToken = jwt.sign(userPayRefreshTokens, RefreshTokenSecret, {
      expiresIn: "7d",
    });
    const NewUser = {
      id: created.user_id,
      name: username,
      password: HashedPassword,
      email: cleanEmail,
    };
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
        email: cleanEmail,
        name: username,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
});
export default router;
