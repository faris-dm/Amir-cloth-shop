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
















export default router