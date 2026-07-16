import express from "express"
import jwt, { sign }  from  "jsonwebtoken"

import cookieParser from "cookie-parser";
const RefreshTokenSecret = "W%&7=-^#-v}XL";
const secret = "W$q4=25*8%v-}UV";
const router = express.Router();
router.use(cookieParser());
import Pool from "../config/db.js";

function generateAccess(user) {
    return jwt.sign(user,secret,{expiresIn:"15m"})
}

router.post("/token", (req,res)=> {
    const IncomingTokens = req.body.token || req.cookies.refreshToken;
    if(!IncomingTokens) {
        return res.status(401).json('No Refresh Token  found')
    }

    jwt.verify(IncomingTokens, RefreshTokenSecret, async (err, decorded) => {
        if(err) {
            return res.status(403).json("Invalid Refresh Tokens")
        }

        try {
            const UserQuery = await Pool.query(
                "SELECT user_id,email,username FROM Users WHERE email= $1 ", [decorded.email]
            ) 
            const infoUser = UserQuery.rows[0]
            if(!infoUser) {
                return res.status(403).json({ message: "User not found" });
            }
            console.log("User verified successfully")

            const payLoad = {
               id: infoUser.user_id,
               email: infoUser.email,
               username: infoUser.username,
            };

            const accessToken = generateAccess(payLoad)
            return res.status(201).json({success:true, accessToken})
             
        } catch (dbError) {
            console.error(dbError)
            return res.status(500).json({ error: "Database error during token refresh" });
        }
    }); // <--- Added this to close the jwt.verify function
}); // <--- Added this to close the router.post function

export default router;