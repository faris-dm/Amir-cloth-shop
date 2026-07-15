import express from "express"
import cookieParser from "cookie-parser"
import Jwt from "jsonwebtoken"
const router =express.Router()
router.use(cookieParser)
let secret = "W$q4=25*8%v-}UV";
let RefreshTokenSecret = "W%&7=-^#-v}XL";
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

 
function RefreshToken(req,res,next) {
let OldRefresHToken=req.cookies.RefreshToken

if(!OldRefresHToken) {
    return res.status(401).json({
      success: false,
      message: "session not found ",
    });
}

Jwt.verify(OldRefresHToken,RefreshTokenSecret,(err,decoded)=> {
    if(err) {
         return res.status(401).json("RefreshTokens are  EXPRED");
    }
})



}



export default RefreshToken
