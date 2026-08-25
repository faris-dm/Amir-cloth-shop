import Pool from "./db.js";
async function detaiImages() {
  const productImages = [
    { product_id: 1, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 1, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 1, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 1, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 1, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 2, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 2, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 2, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 2, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 2, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 3, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 3, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 3, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 3, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 3, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 4, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 4, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 4, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 4, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 4, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 5, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 5, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 5, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 5, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 5, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 6, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 6, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 6, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 6, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 6, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 7, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 7, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 7, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 7, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 7, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 8, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 8, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 8, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 8, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 8, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 9, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 9, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 9, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 9, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 9, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 10, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 10, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 10, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 10, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 10, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 11, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 11, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 11, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 11, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 11, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 13, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 13, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 13, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 13, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 13, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 15, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 15, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 15, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 15, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 15, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 16, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 16, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 16, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 16, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 16, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 17, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 17, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 17, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 17, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 17, image_url: "/images/goman_shirt_back (2).png" },

    { product_id: 18, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 18, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 18, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 18, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 18, image_url: "/images/goman_shirt_back (2).png" },

    { product_id: 19, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 19, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 19, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 19, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 19, image_url: "/images/goman_shirt_back (2).png" },

    { product_id: 20, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 20, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 20, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 20, image_url: "/images/goman_shirt_back (2).png" },
    { product_id: 20, image_url: "/images/goman_shirt_back (2).png" },
  ];
  await Pool.query("TRUNCATE TABLE product_images RESTART IDENTITY CASCADE;");
  const saveDetailImages = `INSERT INTO  product_images (product_id,image_url,position) VALUES ($1,$2,$3)    `;
  const positionTracker = {};
  for (const itemInsert of productImages) {
    const pos = positionTracker[itemInsert.product_id] ?? 0;
    positionTracker[itemInsert.product_id] = pos + 1;

    await Pool.query(saveDetailImages, [
      itemInsert.product_id,
      itemInsert.image_url,
      pos,
    ]);
  }

  console.log("prodact detial images seeds succefully");
}

detaiImages().catch((err) =>
  console.error("error atoring the detail images  in the db", err)
);
