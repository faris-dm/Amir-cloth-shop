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
  SELECT Cart.qantity,
  products.title,
  products.price,
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












export default router
