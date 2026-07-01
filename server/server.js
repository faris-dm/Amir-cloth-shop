import express from "express";
const app = express();
const port = 2300;








app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
