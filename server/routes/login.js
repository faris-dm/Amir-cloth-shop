
import "dotenv/config"
import express from "express"
import jwt from "jsonwebtoken"
import Pool from "../config/db.js"
import bcrypt from "bcrypt"
const router =express.Router()
import cookiesParter from "cookie-parser"
router.use(express.json());
router.use(cookiesParter());
let secret = process.env.JWT_ACCESS_SECRET;
let RefreshTokenSecret = process.env.JWT_REFRESH_SECRET;


function generateAccess(user) {
    return jwt.sign(user,secret,{expiresIn:"15m"})
}

function generateRefresh(user) {
    return jwt.sign(user,RefreshTokenSecret,{expiresIn:"7d"})
}

 router.post("/login", async (req,res)=> {
 const {email,password}=req.body
  if (!email || password.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "inputes  must be  filed",
    });
  }
    const cleanEmail=email.trim()

    try {
        const UserQuery = `SELECT user_id,email,username,password_hash FROM authors WHERE username=$1 OR email=$2 `;
        
          const resultCheck = await Pool.query(UserQuery, [
            cleanEmail,
            cleanEmail,

            
          ]);
          const result=resultCheck.rows[0]
          if(!result) {
            return res.status(400)
            .json({
                error:" there is no User with this Information"
            })
            
          }

        const isValidPassword=  await  bcrypt.compare(password,result.password_hash) 
        if(!isValidPassword) {
            return res.status(401).json({
                success:false,
                message:"Incorrect password"
            })
        }



          const payload = {
            id: result.user_id,
            email: result.email,
            Username:result.username,
          };
          const accessToken=generateAccess(payload)
          console.log("accessToken created in Login",accessToken)
 

          const refreshPlayload= {
            email:result.email
          }
          let  refreshToken=generateRefresh(refreshPlayload)



          res.cookie("token",accessToken,{
            httpOnly:true,
            sameSite:"strict",
            maxAge:15*60*1000
          })

          res.cookie("refresToken",refreshToken,{
            httpOnly:true,
            sameSite:"strict",
            maxAge:60*60*7*24*1000
          });

          return res.status(200).json(`accessToken created`,accessToken)

console.log("incorrect password");


    } catch (error) {
         console.log(error);
    return res.status(500).send("Intrinal server error happens check again");
  
        
    }
 
 })



 export default router
