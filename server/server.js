import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

import productZRoute from "./routes/product.js";
import User from "./routes/User.js";
import Login from "./routes/login.js";
import cors from "cors";
import Pool from "./config/db.js";
import Cart from "./routes/cart.js";
import Order from "./routes/order.js";
import RefreshTokens from "./routes/RefreshToken.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/images", express.static(path.join(__dirname, "./images")));
app.use(RefreshTokens);
app.use(express.json());
app.use("/api", productZRoute);
app.use("/api", User);
app.use("/api", Login);
app.use("/api/cart", Cart);
app.use("/api", Order);

app.get("/", (req, res) => {
  res.json({ message: "It is working Now" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
