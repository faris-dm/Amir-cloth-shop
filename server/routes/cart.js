import express from "express"
import ApiNew from "../api.json" with {type:"json" }
import Pool  from "../config/db.js"
import { resume } from "react-dom/server";
const router=express.Router()
router.use(express.json());


router.use(express.urlencoded({ extended: true }));

router.get("/cartItems", async (req,res)=> {
 try {


   const userId=req.user.user_id

  const carQuery=`

  SELECT 
  Cart.id AS cart_id,
  Cart.qantity,
  products.title,
  products.price,
  products.image,
  (products.price * Cart.qantity) AS total
  FROM Cart JOIN products ON Cart.item_id =products.id
  WHERE Cart.user_id=$1
  ORDER BY Cart.created_at DESC;
  

  `

  const Result= await Pool.query(carQuery,[userId])

const AllTotal=Result.rows.reduce((sum,item)=>sum + Number(item.total),0)



return res.status(200).json({
  success: true,
      count: Result.rows.length,
      AllTotal: AllTotal.toFixed(2),
      data: Result.rows,
})





  
 } catch (error) {
  console.error("Fetch Cart Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
 }

})



  router.post("/add", async (req,res)=> {
    try {
      const UserId=req.user.user_id
      const {id,qantity} =req.body

      if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Valid Product ID is required",
      });
    }

    const parsedQuantity = parseInt(qantity, 10);
    const itemQuantity = !isNaN(parsedQuantity) && parsedQuantity > 0 ? parsedQuantity : 1;
     const ItemFoundDb= await Pool.query("SELECT id from products WHERE id=$1",[id])
if(ItemFoundDb.rows.length ===0) {
return res.status(404).json({
        success: false,
        message: "Product does not exist",
      });
}
//   this query is used  to chwck if the user recenntly added  this item in their cart if then we  add the quantity if not just add
const chackItem=`
 INSERT INTO  Cart (user_id,item_id,qantity) VALUES ($1,$2,$3)
 ON CONFLICT (user_id,item_id)
 DO UPDATE  SET qantity =Cart.qantity+ EXCLUDED.qantity
 RETURNING *
`


const Result= await Pool.query(chackItem,[UserId,id,itemQuantity])
return res.status(200).json({
      success: true,
      message: "Item added to cart",
      data: Result.rows[0],
    });
      
    } catch (error) {
      console.error("Post Cart Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
    }
  })

router.delete("/remove/:id", async(req,res)=> {
  try {
    const Id=req.params
    const UserId=req.user.user_id

     if (!Id || isNaN(Id)) {
      return res.status(400).json({
        success: false,
        message: "Valid Product ID is required",
      });
    }

const deleteItem=`
DELETE FROM Cart WHERE user_id =$1 AND  item_id =$2 RETURNING * `

const Result =await Pool.query(deleteItem,[Id,UserId])
    
 if(Result.rows.length === 0) {
  return res.status(404).json({ success: false, message: "Item not found in cart" });
 }

 return res.status(200).json({
  success:true,
  message:` the item with ${Id} from the storage`
 })


  } catch (error) {
     return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
})

router.put("/update", async (req,res)=> {
 try {
   const UserId=req.user.user_id
  const { item_id,qantity}=req.body

  if (! item_id || !qantity || qantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Valid item ID and quantity (> 0) are required",
      });
    }
const updateQery=
`
 UPDATE Cart SET  qantity=$1  WHERE  user_id=$2 AND  item_id=$3
 RETURNING *
`
if (Result.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Item not found in cart" });
    }

    return res.status(200).json({
      success: true,
      message: "Cart updated",
      data: Result.rows[0],
    });
const Result =await Pool.query(updateQery,[qantity,UserId,item_id])
 } catch (error) {
  console.error("Update Cart Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  
 }
})
//  we need all delete all

router.delete("/removeAll", async (req,res)=> {
  try {
   
     const UserId=req.user.user_id


  


    const DeleteItem =`
     DELETE FROM Cart WHERE    user_id=$1 RETURNING *
    `
    const Result= await Pool.query(DeleteItem,[UserId])
if(Result.rows.length=== 0) {
   return res.status(404).json({ success: false, message: "Item not found in cart" });
}
return res.status(200).json({success:true, message:"item delete  from the Cart",result:Result.rows.length})

  } catch (error) {
     return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
})





export default router
