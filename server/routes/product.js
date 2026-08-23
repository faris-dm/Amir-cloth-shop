import express from "express";
const router = express.Router();
import Role from "../middle/role.js";
// import ApiNewData from "../api.json" with { type: "json" };


import Pool from "../config/db.js";



router.use(express.json());




// 1. GET ALL PRODUCTS (From PostgreSQL)
router.get("/products", async (req, res) => {
  try {
    // Added 'id' to SELECT so frontend and ORDER BY have access to it
    const resultQuery = await Pool.query(
      "SELECT * FROM products ORDER BY id DESC"
    );

    return res.status(200).json({
      success: true,
      count: resultQuery.rows.length,
      data: resultQuery.rows
    });
  } catch (error) {
    console.error("Database error in GET /products:", error);
    return res.status(500).json({
      success: false,
      message: "Error fetching database items",
      error: error.message
    });
  }
});

// 2. GET SINGLE PRODUCT BY ID (From PostgreSQL)
router.get("/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Pool.query(
      "SELECT id, title, price, description, category, image, rating FROM products WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Product with ID ${id} not found`
      });
    }

    return res.status(200).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error("Database error in GET /products/:id:", error);
    return res.status(500).json({
      success: false,
      message: "Error retrieving product details",
      error: error.message
    });
  }
});

router.post("/products",  async (req,res)=> {
  try {
    
   const {title,price,category,description,image,rating}=req.body

   if (!title || !price || !description || !category || isNaN((price))) {
      return res.status(400).json("Please fill in all required information correctly.");
    }
    const QuryResult= await Pool.query(
      "SELECT title,price,category,description FROM products WHERE title =$1",
      [title]
    )

    if(QuryResult.rows.length > 0) {
       return res.status(409).json({
        success: false,
        message: `Product with  ${title}  found `
      });

    }
     const NewItem=`
     INSERT INTO products (title,price,category,description,image,rating)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING *;
   `
const fromatRatings=  rating ?(typeof rating ==="object" ? JSON.stringify(rating):rating) :null
 const Result= await Pool.query(NewItem,[title,price,category,description,image,fromatRatings])
     console.log(Result)
return res.status(201).json({
      message: "Item created successfully.",
      product: Result.rows[0]
    });
 

  } catch (error) {
    console.error("Postgres Insert Error:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
  
})






router.put("/products/:id", async (req,res)=> {

  const {id}=req.params
   const {title,price,category,description,image,rating} =req.body
 try {
  
 if(isNaN(id) || id==="") {
  return res.status(400).json("Please Insert Valid inputs")
 }

const Result= await Pool.query ("SELECT id,title,price,category,description,image,rating  FROM products WHERE id=$1",[id])

if(Result.rows.length ===0 ) {
 return  res.status(404).json({
    success:false,
    message:`there is no item  with ${id}  `
  })
}
const ExitingProducet=Result.rows[0]
const UpdatedItems=`
UPDATE products  SET  title=$1,price=$2,category=$3,description=$4,image=$5,rating=$6 WHERE id =$7 RETURNING* `
   
const FinalResult= await Pool.query(UpdatedItems,[

  title|| ExitingProducet.title,
  price ||ExitingProducet.price,
  category|| ExitingProducet.category,
  description|| ExitingProducet.description,
  image||ExitingProducet.image,
  rating? JSON.stringify(rating) :ExitingProducet.rating,
    ExitingProducet.id
])
 return res.status(200).json({
  success:true,
  data:FinalResult.rows[0]
 })
 

 } catch (error) {
  console.error(error)
  return res.status(500).json("Intrnal Server error")
 }
})
 




  router.delete("/products/:id", async (req,res)=> {
 try {
   const {id}=req.params
   if(isNaN(id) || id==="") {
  return res.status(400).json("Please Insert Valid inputs")
 }

const result= await Pool.query(`
  DELETE  FROM products WHERE id=$1 RETURNING *`,[id])
 const Rows=result.rows.length
if(Rows ===0) {
 

 return  res.status(404).json({
    success:false,
    message:`there is no item  with ${id}  `
  })
 }

return  res.status(200).json({
  success:true,
  data:result.rows[0]
})


 } catch (error) {
  console.error(error)
  return res.status(500).json("Intrnal server error")
  
 }



  }) 




export default router;






























