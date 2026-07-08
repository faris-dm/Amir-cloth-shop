import express from "express";


const router = express.Router();
import ApiNewData from "../api.json" with { type: "json" };
// import ApiNew from "../api.json" with {type :"json"};
let ApiNew = [...ApiNewData];


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

router.post("/product", async (req, res) => {
  
  try {
    
  const {title,price,description,catagory,images,rate,count}=req.body
  if(!title || !price || !description || !catagory) {
    return res.status(400).json("please  fill the  informations  correctly")
  }
    const foundItem=ApiNew.find(item=>item.title===title)
    if(foundItem) {
      return res.status(409).json("Item aready found ")
    }

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
 router.put("/produt/:id",(req,res)=> {
    const UpdatedItemId=parseInt(req.params.id)
    const itemLocation=ApiNew.find(item=>item.id=UpdatedItemId)
    if(!itemLocation) {
      return res.status(404).json(" this item does  in the products")
    }
      const {title,price,description,catagory,images,rate,count}=req.body
   if(!title || !price) {
    return res.status(400).json("title and Price  and   required   for updates")
   }


   const updatedItem= {
   id: productId, // Keep the same ID!
      title: title,
      price: price,
      description: description || ApiNew.description, // Fallback to old description if not provided
      catagory: catagory || ApiNew.catagory,
      images: images || ApiNew.images,
      rating: {
        rate: rate || ApiNew.rating.rate,
        count: count || ApiNew.rating.count
      }
   }
      
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