import express from "express";
import productZRoute from "./routes/product.js";
import User from "./routes/User.js";

// import Pool from "./config/db.js";
import Pool from "./config/db.js";
const app = express();
app.use(express.json());
app.use("/api/", productZRoute);
app.use("/api", User);
const port = 2300;

app.get("/", (req, res) => {
  res.json({ message: "It is  working Now" });
});

app.listen(port, () => {
  console.log(`http://:localhost:${port}`);

 
});
