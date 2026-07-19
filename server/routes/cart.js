import express from "express"
import ApiNew from "../api.json" with {type:"json" }
import Pool  from "../config/db.js"
const router=express.Router()
router.use(express.json());


router.use(express.urlencoded({ extended: true }));


router.get("/item",(req,res)=> {
    
})