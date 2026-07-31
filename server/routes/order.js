// routes/order.jsHTTP MethodRoute EndpointRole / ActionRequires Request Body?POST/ordersCheckout: Convert cart into a placed orderYes ({ shippingAddress, paymentMethod })GET/ordersFetch full order history for userNoGET/orders/:idFetch specific invoice/receipt by order IDNo

import expres, { json } from "express"
import Pool from "../config/db.js"
const router=expres.Router()
router.use(expres.json())

router.post("/order", async (req, res) => {
  try {
    const UserID = req.user.user_id;
    const { shippingAddress, paymentMethod } = req.body;

    // 1. Validate BEFORE checking out a pool connection
    if (!shippingAddress || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: "Address and payment method are required",
      });
    }

    // 2. Connect client for transaction
    const client = await Pool.connect();

    try {
      await client.query("BEGIN");

      // 3. Use client.query everywhere
      const Result = await client.query(
        `SELECT
           Cart.item_id,
           Cart.qantity,
           products.price
         FROM Cart
         JOIN products ON Cart.item_id = products.id
         WHERE Cart.user_id = $1`,
        [UserID]
      );

      if (Result.rows.length === 0) {
        await client.query("ROLLBACK");
        return res
          .status(400)
          .json({ success: false, message: "Cart is empty" });
      }

      const TotalPrice = Result.rows.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.qantity),
        0
      );

      const CreateOrderQuery = `
        INSERT INTO orders (user_id, amount, shipping_address, payment_method, status) 
        VALUES ($1, $2, $3, $4, 'PENDING')
        RETURNING id;
      `;

      const orderResult = await client.query(CreateOrderQuery, [
        UserID,
        TotalPrice,
        shippingAddress,
        paymentMethod,
      ]);

      const newItem = orderResult.rows[0].id;

      const insertNew = `
        INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase)
        VALUES ($1, $2, $3, $4);
      `;

      for (const item of Result.rows) {
        await client.query(insertNew, [
          newItem,
          item.item_id,
          item.qantity, // 4. Fixed: matching your DB column name 'qantity'
          item.price,
        ]);
      }

      await client.query("DELETE FROM Cart WHERE user_id = $1;", [UserID]);

      await client.query("COMMIT");

      return res.status(201).json({
        success: true,
        message: "Order placed successfully",
        orderId: newItem,
      });
    } catch (error) {
      await client.query("ROLLBACK");
      throw error; // Re-throw to outer catch block for server error response
    } finally {
      client.release(); // Safe release in the inner transaction block
    }
  } catch (error) {
    console.error("Create Order Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});








export default router