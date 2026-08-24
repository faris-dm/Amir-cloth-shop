  
  
  import Pool from "./db";
  async function detaiImages() {
    const productImages = [
      { product_id: 1, image_url: "/images/black-tshirt-front.png" },
      { product_id: 1, image_url: "/images/black-tshirt-front.png" },
      { product_id: 1, image_url: "/images/black-tshirt-front.png" },
      { product_id: 1, image_url: "/images/black-tshirt-front.png" },
      { product_id: 1, image_url: "/images/black-tshirt-front.png" },

      { product_id: 2, image_url: "/images/black-tshirt-front.png" },
      { product_id: 2, image_url: "/images/black-tshirt-front.png" },
      { product_id: 2, image_url: "/images/black-tshirt-front.png" },
      { product_id: 2, image_url: "/images/black-tshirt-front.png" },
      { product_id: 2, image_url: "/images/black-tshirt-front.png" },

      { product_id: 3, image_url: "/images/black-tshirt-front.png" },
      { product_id: 3, image_url: "/images/black-tshirt-front.png" },
      { product_id: 3, image_url: "/images/black-tshirt-front.png" },
      { product_id: 3, image_url: "/images/black-tshirt-front.png" },
      { product_id: 3, image_url: "/images/black-tshirt-front.png" },

      { product_id: 4, image_url: "/images/black-tshirt-front.png" },
      { product_id: 4, image_url: "/images/black-tshirt-front.png" },
      { product_id: 4, image_url: "/images/black-tshirt-front.png" },
      { product_id: 4, image_url: "/images/black-tshirt-front.png" },
      { product_id: 4, image_url: "/images/black-tshirt-front.png" },

      { product_id: 5, image_url: "/images/black-tshirt-front.png" },
      { product_id: 5, image_url: "/images/black-tshirt-front.png" },
      { product_id: 5, image_url: "/images/black-tshirt-front.png" },
      { product_id: 5, image_url: "/images/black-tshirt-front.png" },
      { product_id: 5, image_url: "/images/black-tshirt-front.png" },
    ];
 await Pool.query("TRUNCATE TABLE products RESTART IDENTITY CASCADE;");
   const saveDetailImages=`INSERT INTO  product_images (product_id,image_url,position) VALUES ($1,$2,$3)    `

for( const itemInsert of productImages) {
    await Pool.query(saveDetailImages,[itemInsert.product_id,itemInsert.image_url,itemInsert.position])
}


console.log("prodact detial images seeds");
   

    }
 
  detaiImages().catch((err)=>console.error("error atoring the detail images  in the db",err))