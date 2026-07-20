import express, { json } from "express";


const router = express.Router();
import ApiNewData from "../api.json" with { type: "json" };
// import ApiNew from "../api.json" with {type :"json"};
let ApiNew = [...ApiNewData];
import Pool from "../config/db.js";


router.use(express.json());

router.get("/products", async (req, res) => {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(" failed  to get the data  for the api");
  }
  const data = await response.json();
  return res.status(201).json(data);
});

router.get("/products/:id", async (req, res) => {
  const userInputId = req.params.id;

  try {
    const url = await fetch("https://fakestoreapi.com/products");
    const response = url;
    const data = await response.json();
    const getID = data;
    const match = getID.find((item) => item.id === parseInt(userInputId));
    if (!match) {
      return res.status(404).json({ message: " there is match in the list" });
    }
    return res.status(200).json(match);
  } catch (error) {
    console.error(error);
  }
});

router.post("/products", async (req, res) => {
  
  try {
    
  const {title,price,description,category,images,}=req.body
  if(!title || !price || !description || !category) {
    return res.status(400).json("please  fill the  informations  correctly")
  }
    const foundItem=ApiNew.find(item=>item.title===title)
    if(foundItem) {
      return res.status(409).json("Item aready found ")
    }


const InsertQuery=`
INSERT INTO products (title,price,description,category,image,rating)
  VALUES ($1,$2,$3,$4,$5,$6,$8)
   RETURNING *
`
 const queyItems= [
  title,price,description,category,images,JSON.stringify(rating)
 ]
const dbResult=await Pool.query(InsertQuery,queyItems)
 const dbRow=dbResult.rows[0]

  const newItem = {
    id: ApiNew.length+1,
    title: req.body.title,
    price:req.body.price,
    description: req.body.description,
    catagory:req.body.catagory,
    images:req.body.images,
    rating: {
      rate:req.body.rate || 3.4,

      count:req.body.count || 211
    },
  };
  ApiNew.push(newItem);
  console.log("done adding new Item");
  return res.status(201).json(newItem);
  } catch (error) {
    console.log(err)
    return res.status(500).json("intrnal server error")
    
  }
});



// put  route  to make  the the edit
 router.put("/products/:id",(req,res)=> {
    const UpdatedItemId=parseInt(req.params.id)
   const itemLocation = ApiNew.find(item => item.id === UpdatedItemId)
    if(!itemLocation) {
      return res.status(404).json(" this item does not  found in the products")
    }
      const {title,price,description,catagory,images,rate,count}=req.body
   if(!title || !price) {
    return res.status(400).json("title and Price  and   required   for updates")
   }


   const updatedItem= {
   id: UpdatedItemId, // Keep the same ID!
      title: title || itemLocation.title,
      price: price ||itemLocation.price,
      description: description || itemLocation.description, // Fallback to old description if not provided
      catagory: catagory || itemLocation.catagory,
      images: images || itemLocation.images,
      rating: {
        rate: rate || itemLocation.rating.rate,
        count: count || itemLocation.rating.count
      }
   }
   const itemIndex=ApiNew.indexOf(itemLocation)
  //  findindex is  array methods andn we  are using objects so
   ApiNew[itemIndex]=updatedItem
   return res.status(201).json(updatedItem)
      
 })


 


router.delete("/products/:id",(req,res)=> {
 const itemId=parseInt(req.params.id)
  const itemFound=ApiNew.find(item=> item.id===itemId)
  if(!itemFound) {
    return res.status(404).json("item  does  not  found")
  }
  const indexItem=ApiNew.indexOf(itemFound)
  // delete ApiNew[indexItem]
  // return res.json(201).json(`item ${itemFound} deleted succefully`)


  const deletedItem = ApiNew.splice(indexItem, 1);
 return res.status(200).json({
    message: "Deleted successfully",
    item: deletedItem[0]
  });


})












export default router;






























// router.get("/products/:id", async (req, res) => {
//   const id = req.params.id.toLowerCase();

//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const item_id = response.forEach((item) => item.id === id);
//     if (!item_id) {
//       return res.status(404).send("tgere is no much in this  list");
//     }
//     return res.status("201").send(item_id);
//   } catch (error) {
//     return res.status(401).send("internal Error");
//   }
// });