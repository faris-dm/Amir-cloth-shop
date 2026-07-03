import express from "express";
import productZRoute from "./routes/product.js";
const app = express();
app.use(express.json());
app.use("/api/", productZRoute);
const port = 2300;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);

});

