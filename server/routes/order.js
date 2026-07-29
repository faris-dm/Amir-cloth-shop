// routes/order.jsHTTP MethodRoute EndpointRole / ActionRequires Request Body?POST/ordersCheckout: Convert cart into a placed orderYes ({ shippingAddress, paymentMethod })GET/ordersFetch full order history for userNoGET/orders/:idFetch specific invoice/receipt by order IDNo


import expres from "express"
import Pool from "../config/db"
const router  =expres.Router()
router.expres.json()








router.get("/orders", async (req,res)=> {
  try {
      const data=req.body
    if(!data) {
return res.status(400).json("Please  send  valid data")    }
console.log("item send succefully")
 return res.status(200).json(data)

  } catch (error) {
    console.error("Postgres Insert Error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
  




})

router.get("order/:id",(req,res)=> {
    const {id}=req.params
     if (isNaN(id) || id === "") {
       return res.status(400).json("Please Insert Valid inputs");
     }
})

export default router