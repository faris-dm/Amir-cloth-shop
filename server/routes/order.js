// routes/order.jsHTTP MethodRoute EndpointRole / ActionRequires Request Body?POST/ordersCheckout: Convert cart into a placed orderYes ({ shippingAddress, paymentMethod })GET/ordersFetch full order history for userNoGET/orders/:idFetch specific invoice/receipt by order IDNo

import expres from "express"
import Pool from "../config/db.js"
const router=expres.Router()
router.use(expres.json())

router.get("/order", async (req,res)=> {
    try {
        const UserID=req.user.user_id
         const {id,quantity}=req.body
         await Pool.query("BEGIN");
    
 if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Valid Product ID is required",
      });
    }
    const SelectData= await Pool.query(` SELECT Cart.item_id,Cart.qantity FROM Cart JOIN products ON Cart.user_id==products.id
       WHERE Cart.user_id=$1 `)
if(SelectData.rows.length===0) {
    return res.status(404).json({
        success: false,
        message: "Product does not exist",
      });
} const Result= await Pool.query(SelectData,[UserID])
if(Result.rows.length===0) {
    await Pool.query("ROLLBACK");
      return res.status(400).json({ success: false, message: "Cart is empty" });
}


const TotalPrice= Result.rows.reduce((sum,item)=> sum + Number(item.price) * item.quantity,0)



 } catch (error) {
        
      console.error("fetch order Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
        
    }

})








export default router