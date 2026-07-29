import express from "express"
import ApiNew from "../api.json" with {type:"json" }
import Pool  from "../config/db.js"
const router=express.Router()
router.use(express.json());


router.use(express.urlencoded({ extended: true }));

//  this handle  items  intented to be bought
//       => get:fetch or get the items ,
//       =>post:add some items
//       =>pathch:add the quatitty of item  that like edit the  how many
//       =>DELETE /cart/:itemId — Removes a specific item completely from the cart (the trash can button).
//       => DELETE /cart — Clears the entire cart at once (useful right after a successful checkout).

router.get("/item", async (req,res)=> {
  try {
     const {title,price,category,description,image,rating}=req.body
         


   if (!title || !price || !description || !category || isNaN((price)) ||price===undefined ) {
      return res.status(400).json("Please fill in all required information correctly.");
    }
    

return res.status(200).json(title,price,image,description)




  } catch (error) {
    
  }

})


router.post("/cartItem/:id", async (req,res)=> {
   const {id}=req.params
    const {title,price,category,description,image,rating} =req.body
try {
    

   if(isNaN(id) || id==="") {
  return res.status(400).json("Please Insert Valid inputs")
 }
 if(!title,!price,!category) {
  return res.status(404).json("Invalid Item")
 }
 res.status(200).json(title,price,category,description,image,rating)
 
} catch (error) {
  console.error(error)
  return res.status(500).json("Intrnal Server error")
  
}

})



router.delete("/cart/:id", async (req,res)=> {
   try {
     const {id}=req.params
    
   if(isNaN(id) || id==="") {
  return res.status(400).json("Please Insert Valid inputs")
 }

 const Delete=`
 DELETE products WHERE id=$1`
 const resulDeleted=await Pool.query(Delete,[id])
 const RowsGet=resulDeleted.rowCount.length
 if(RowsGet===0) {
    return res.status(404).json("There is no item  with match ")
 }
 return res.status(200).json(RowsGet.rows[0])
   } catch (error) {
    
   }


} )


export default router