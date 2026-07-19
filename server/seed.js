import express from "express"
// import Api from './api.json' with {   type: "json"}
import Api from  "./api.json" with {type:"json"}
const router=express.Router()
router.use(express.json());
import Pool from "./config/db.js";
router.use(express.urlencoded({ extended: true }));




 async function Seed() {
    const saveItem =
    `INSERT INTO products (id,title,price,description,category,image,rating)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    
    `
 for (const items of Api) {
    await Pool.query(saveItem,[
        items.id,items.title,items.price,items.description,items.category,items.image,JSON.stringify(items.rating)
    ])
 }
 console.log("Item Stored  succefully")
}
// for of user as  aloop in db in map and objects
//  error :we removed  the retruing item blc in is asking dome id
//  and  added callbacks  in the catch


Seed().catch(err=> console.error("error creating seedind Database",err))