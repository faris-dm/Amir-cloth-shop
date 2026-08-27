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

    { product_id: 4, image_url: "/images/pantBack(3).png" },
    { product_id: 4, image_url: "/images/pantFront(3).png" },
    { product_id: 4, image_url: "/images/pantLeft(3).png" },
    { product_id: 4, image_url: "/images/pantOnly.png" },
    { product_id: 4, image_url: "/images/pantRight(3) (1).png" },

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

    { product_id: 11, image_url: "/images/cream_pants_back.png" },
    { product_id: 11, image_url: "/images/cream_pants_front.png" },
    { product_id: 11, image_url: "/images/cream_pants_side.png" },
    { product_id: 11, image_url: "/images/cream_pants_three_quarter.png" },
    { product_id: 11, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 12, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 13, image_url: "/images/ash_tshirt_front.png" },
    { product_id: 13, image_url: "/images/ash_Only.png" },
    { product_id: 13, image_url: "/images/ash_tshirt_new (1).png" },
    { product_id: 13, image_url: "/images/detailImages/ash_side.png" },
    { product_id: 13, image_url: "/images/ash_tshirt_left (3).png" },

    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 14, image_url: "/images/ash_tshirt_back (2).png" },

    { product_id: 15, image_url: "/images/pattern_shirt_back (1).png" },
    { product_id: 15, image_url: "/images/pattern_shirt_back (2).png" },
    { product_id: 15, image_url: "/images/pattern_shirt_back (3).png" },
    { product_id: 15, image_url: "/images/pattern_shirt_front.png" },

    {
      product_id: 15,
      image_url: "/images/pattern_shirt_three_quarter (2).png",
    },

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

    { product_id: 19, image_url: "/images/black_back.png" },
    { product_id: 19, image_url: "/images/black_front.png" },
    { product_id: 19, image_url: "/images//black_left.png" },
    { product_id: 19, image_url: "/images/black_right.png" },
    { product_id: 19, image_url: "/images/black_tshirt.png" },

    { product_id: 20, image_url: "/images/gugutBack(1).png" },
    { product_id: 20, image_url: "/images/gugutFront(1).png" },
    { product_id: 20, image_url: "/images/gugutLeft(1).png" },
    { product_id: 20, image_url: "/images/gugutOnly(1).png" },
    { product_id: 20, image_url: "/images/gugutRight(1).png" },

    { product_id: 21, image_url: "/images/grapicBack.png" },
    { product_id: 21, image_url: "/images/grapicFont.png" },
    { product_id: 21, image_url: "/images/grapicLeft.png" },
    { product_id: 21, image_url: "/images/grapicOnly.png" },
    { product_id: 21, image_url: "/images/grapicRight.png" },
    //  server/detailImages/
    { product_id: 22, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 22, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 22, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 22, image_url: "/images/ash_tshirt_back (2).png" },
    { product_id: 22, image_url: "/images/ash_tshirt_back (2).png" },
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
