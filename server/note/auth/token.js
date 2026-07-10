import express from "express"
import jwt, { sign }  from  "jsonwebtoken"
const UserStorage = require("../models/storeage"); // Using your Map

const RefreshTokenSecret = "W%&7=-^#-v}XL";
const secret = "W$q4=25*8%v-}UV";
const router = express.Router();



function generateAccess(user) {
    return jwt.sign(user,secret,{expiresIn:"15m"})

}

router.post("token",(rew,res)=> {
    const IncomingTokens = req.body.token || req.cookies.refreshToken;
    if(!IncomingTokens) {
        return res.status(401).json('No Refresh Token  found')
    }


    jwt.verify(IncomingTokens,RefreshTokenSecret,(err,decorded)=> {
        if(err) {
            return res.status(403).json("Invalid Refresh Tokens")
        }
        const userInfoStorge=userInfoStorge.get(decorded.email)
    })
})



