import express, { json } from "express";


const router = express.Router();
import ApiNewData from "../api.json" with { type: "json" };
// import ApiNew from "../api.json" with {type :"json"};
let ApiNew = [...ApiNewData];
import Pool from "../config/db.js";
import { Query } from "pg";
import { resume } from "react-dom/server";


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

// router.post("/products", async (req, res) => {
//   try {
//     const { title, price, description, category, images, rate, count } = req.body;

//     if (!title || !price || !description || !category) {
//       return res.status(400).json("Please fill in all required information correctly.");
//     }

//     // const foundItem = ApiNew.find((item) => item.title === title);
//     // if (foundItem) {
//     //   return res.status(409).json("Item already found.");
//     // }
  

//     // 1. Corrected SQL placeholders to match 6 columns ($1 through $6)
//     const InsertQuery = `
//       INSERT INTO products (title, price, description, category, image, rating)
//       VALUES ($1, $2, $3, $4, $5, $6)
//       RETURNING *
//     `;

//     // 2. Safe rating object handling
//     const ratingObj = {
//       rate: rate || 3.4,
//       count: count || 211
//     };

//     const queryItems = [
//       title,
//       price,
//       description,
//       category,
//       images || null,
//       JSON.stringify(ratingObj)
//     ];

//     const dbResult = await Pool.query(InsertQuery, queryItems);
//     const dbRow = dbResult.rows[0];

//     const newItem = {
//       id: ApiNew.length + 1,
//       title,
//       price,
//       description,
//       category,
//       images,
//       rating: ratingObj
//     };
    
//     ApiNew.push(newItem);
//     console.log("Done adding new item");
    
//     return res.status(201).json(dbRow || newItem);

//   } catch (error) {
//     console.error("Error inserting product:", error); // Fixed variable name from 'err' to 'error'
//     return res.status(500).json("Internal server error");
//   }
// });
router.post("/products",  async (req,res)=> {
  try {
    
   const {title,price,category,description,image,rating}=req.body

   if (!title || !price || !description || !category || isNaN((price)) ||price===undefined ) {
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
 const Result= await Pool.query(NewItem,[title,price,category,description,image,rating])
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



// put  route  to make  the the edit,
//  router.put("/products/:id",  async (req,res)=> {
//     const UpdatedItemId=parseInt(req.params.id)
//    const itemLocation = ApiNew.find(item => item.id === UpdatedItemId)
//     if(!itemLocation) {
//       return res.status(404).json(" this item does not  found in the products")
//     }
//       const {title,price,description,catagory,images,rate,count}=req.body
//    if(!title || !price) {
//     return res.status(400).json("title and Price  and   required   for updates")
//    }


//    const updatedItem= {
//    id: UpdatedItemId, // Keep the same ID!
//       title: title || itemLocation.title,
//       price: price ||itemLocation.price,
//       description: description || itemLocation.description, // Fallback to old description if not provided
//       catagory: catagory || itemLocation.catagory,
//       images: images || itemLocation.images,
//       rating: {
//         rate: rate || itemLocation.rating.rate,
//         count: count || itemLocation.rating.count
//       }
//    }
//    const itemIndex=ApiNew.indexOf(itemLocation)
//   //  findindex is  array methods andn we  are using objects so
//    ApiNew[itemIndex]=updatedItem
//    return res.status(201).json(updatedItem)
      
//  })


router.put("/products/:id", async (req,res)=> {

  const {id}=req.params
   const {title,price,category,description,image,rating} =req.body
 try {
  
 if(isNaN(id) || id==="") {
  return res.status(400).json("Please Insert Valid inputs")
 }
//   if(!title|| !price ||!description) {
//   return res.status(400).json("Please Insert Valid inputs")
//  }
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
   ExitingProducet.id,
  title|| ExitingProducet.title,
  price ||ExitingProducet.price,
  category|| ExitingProducet.category,
  description|| ExitingProducet.description,
  image||ExitingProducet.image,
  rating? JSON.stringify(rating) :ExitingProducet.rating
 
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
 


// router.delete("/products/:id",(req,res)=> {
//  const itemId=parseInt(req.params.id)
//   const itemFound=ApiNew.find(item=> item.id===itemId)
//   if(!itemFound) {
//     return res.status(404).json("item  does  not  found")
//   }
//   const indexItem=ApiNew.indexOf(itemFound)
//   // delete ApiNew[indexItem]
//   // return res.json(201).json(`item ${itemFound} deleted succefully`)


//   const deletedItem = ApiNew.splice(indexItem, 1);
//  return res.status(200).json({
//     message: "Deleted successfully",
//     item: deletedItem[0]
//   });



  router.delete("/produts/:id", async (req,res)=> {
 try {
   const {id}=req.params
   if(isNaN(id) || id==="") {
  return res.status(400).json("Please Insert Valid inputs")
 }

const result= await Pool.query(`
  SELECT id,title,price,category,description,image,rating FROM products WHERE id=$1`,[id])
 const Rows=result.rows.length
if(Rows ===0) {
 

 return  res.status(404).json({
    success:false,
    message:`there is no item  with ${id}  `
  })
 }
 const ResultId=  `
DELETE  *  FROM products WHERE id=$1,[id]
`
return  res.status(201).json({
  success:true,

  data:ResultId.rows[0]
})


 } catch (error) {
  console.error(error)
  return res.status(500).json("Intrnal server error")
  
 }



  }) 











export default router;






























