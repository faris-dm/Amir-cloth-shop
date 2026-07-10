import  express  from "express"
import jwt from "jsonwebtoken"
import cookiesparser  from "cookiesparser"
import crypto  from "crypto"
const router = express.Router();
router.use(cookiesparser());
import bcrypt  from "bcrypt"
import strict from "assert/strict";
const UserStorage=[]


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

let secret = "W$q4=25*8%v-}UV";
let RefreshTokenSecret = "W%&7=-^#-v}XL";
 
  let generateAccess = (UserPayLoad) => {
    return jwt.sign(UserPayLoad, secret, { expiresIn: "15m" });
  };




  router.post("/api/register",(req,res)=> {
    const {username,email,password,confirmPassword} =req.body
    const cleanEmail=email.trim().toLowerCase()
    if(password!==confirmPassword) {
       return res.status(400).json({
         success: false,
         message: "Password is not simmilar filed",
       });
    }
    if(UserStorage.has(cleanEmail)) {
       return res.status(409).json({
         success: false,
         message: "User already exists. Please log in.",
       });
    }

   try {
    const HashedPassword=await bcrypt.hash(password,10)
        let UserId = crypto.randomUUID();
         const UserPayLoad = {
    id: UserId,
    email: cleanEmail,
  
  };
  const userPayRefreshTokens={
    email:cleanEmail
  }


  let accessToken=generateAccess(UserPayLoad) 
  const refreshToken=jwt.sign(userPayRefreshTokens,RefreshTokenSecret,{
    expiresIn:"7d"
  })
  const NewUser={
    id:UserId,
    name:username,
    password:HashedPassword,
    email:cleanEmail
  }
  UserStorage.set(cleanEmail,NewUser)


  res.cookie("token",accessToken,{
    httpOnly:true,
    sameSite:"strict",
    maxAge:15*60*1000
  })
  console.log("acccessToken Saved")

  res.cookie("refreshToken",refreshToken,{
    httpOnly:true,
    sameSite:"strict",
    maxAge:7*24*60*60*1000
  })
     return res.status(201).json({
      success: true,
      message: "Registration successful",
      user: {
        id: UserId,
        email: cleanEmail,
        name: username,
  
      },
    });
    
   } catch (error) {
     console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
    
   

  })