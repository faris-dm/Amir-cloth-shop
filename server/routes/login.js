import express from "express"
import jwt from "jsonwebtoken"
import Pool from "../config/db"
import bcrypt from "bcrypt"
const router =express.Router()
import cookiesParter from "cookie-parser"
routher.use(express.json())
router.use(cookiesParter())
let secret = "W$q4=25*8%v-}UV";
let RefreshTokenSecret = "W%&7=-^#-v}XL";


function generateAccess(user) {
    return jwt.sign(user,secret,{expiresIn:"15m"})
}

function generateRefresh(user) {
    return jwt.sign(user,RefreshTokenSecret,{expiresIn:"7d"})
}

 router.post("/login", async (req,res)=> {
 const {email,password ,}=req.body
 if(email===" " || password==="" ) {
    res.status(209).json({
        sucess:false,
        message:"Please  fill the inputs correctly"
    })
    const cleanEmail=email.trim()

    try {
        const UserQuery = `SELECT user_id,email FROM Users WHERE username=$1 OR email=$2 `;
        const Username=UserQuery.Username
          const resultCheck = await Pool.query(UserQuery, [
            cleanEmail,
            Username,
          ]);
          const result=resultCheck.rows[0]
          if(!result) {
            return res.status(400)
            .json({
                error:" there is no User with this Information"
            })
            
          }
          const payload = {
            id: result.user_id,
            email: result.email,
            Username:result.Username
          };
          const accessToken=generateAccess(payload)
          console.log("accessToken created in Login")
 

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

          return res.status(200).json({
            success:true,
            message:"SuccessFull Login",

          })

console.log("incorrect password");


    } catch (error) {
         console.log(error);
    return res.status(500).send("Intrinal server error happens check again");
  
        
    }
 }
 })



 export default router
