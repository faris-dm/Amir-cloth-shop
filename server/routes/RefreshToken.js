
import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"
import Jwt from "jsonwebtoken"
const router =express.Router()
router.use(cookieParser())
let secret = process.env.JWT_ACCESS_SECRET;
let RefreshTokenSecret = process.env.JWT_REFRESH_SECRET;
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
import Pool from "../config/db.js";


function generateAccess(user) {
return Jwt.sign(user,secret,{expiresIn:"15m"})
}
function generateRefreshToken(user) {
  return Jwt.sign(user,RefreshTokenSecret,{expiresIn:"7d"})
}
 
router.post("/refreshtoken",(req,res,next) => {



let OldRefresHToken = req.cookies.refresToken;

if (!OldRefresHToken) {
  return res.status(401).json({
    success: false,
    message: "session not found ",
  });
}
// refreshToken  creations amd make  the user
Jwt.verify(OldRefresHToken, RefreshTokenSecret, async (err, decoded) => {
  if (err) {
    return res.status(401).json("RefreshTokens are  EXPRED");
  }
  try {
    const UserQuery = await Pool.query(
      "SELECT user_id,email,username FROM Users WHERE email= $1 ",
      [decoded.email]
    );
    const infoUser = UserQuery.rows[0];
    if (!infoUser) {
      return res.status(403).json({ message: "User not found" });
    }
    const Payload = {
      id: infoUser.user_id,
      email: infoUser.email,
      username: infoUser.username,
    };

    const RefreshPayload = {
      email: infoUser.email,
    };
    const accessToken = generateAccess(Payload);
    const refresToken = generateRefreshToken(RefreshPayload);

    res.cookie("token", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 15 * 60 * 1000, // 15 minutes
    });
    res.cookie("refresToken", refresToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      success: true,
      message: "Tokens successfully renewed!",
      accessToken: accessToken, // Optional: send in response if frontend needs it in memory
    });
  } catch (error) {
    console.log("Database error in ,tokenrefresh");
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

}) 







export default router
