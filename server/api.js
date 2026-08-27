const img1 = "/images/front.png";
const img2 = "/images/standMan.png";
const img3 = "/images/halfCloth.png";
const img4 = "/images/pantFront(3).png";

const img5 = "/images/blackshirt.png";
const img6 = "/images/Black_shirt.png";
const img7 = "/images/pw_Tishirt.png";
const img8 = "/images/goman_shirt_back (2) - Copy.png";
const img9 = "/images/duckFont.png";

const img10 = "/images/front.png";
const img11 = "/images/sitMan.png";
const img12 = "/images/whiteMan.png";
const img13 = "/images/glass.png";
const img14 = "/images/frontModel(1).png";

const img15 = "/images/t-shirt.png";
const img16 = "/images/sitMan.png";
const img17 = "/images/Black_shirt.png";
const img18 = "/images/image.png";
const img19 = "/images/blackshirt.png";
const img20 = "/images/cream_pants_front.png";
const img21 = "/images/gugutFront(1).png";
// server/images/gugutFront(1).png
// c:\Users\Administrator\Downloads\gugutOnly(1).png

const products = [
  {
    id: 1,
    title: "white t-shirt & Line-Art Illustrations",
    price: 109.95,
    description:
      "Designed with thin black grid lines forming panels across the shirt, detailed with minimal black line-art drawings of a bird",
    category: "men's clothing",
    image: img1,
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Minimalist Black Graphic T-Shirt",
    price: 22.3,
    description:
      "Classic black crew-neck t-shirt with a minimalist graphic print, made from soft breathable cotton.",
    category: "men's clothing",
    image: img2,
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "White Straight-Leg Trousers",
    price: 55.99,
    description:
      "Crisp white straight-leg trousers offering a clean, versatile everyday look.",
    category: "men's clothing",
    image: img3,
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Plain White Cotton T-Shirt",
    price: 15.99,
    description:
      "Plain white t-shirt made from a soft cotton blend, a wardrobe essential for layering or wearing alone.",
    category: "men's clothing",
    image: img4,
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title: "Tailored White Suit Trousers",
    price: 695,
    description:
      "Tailored white suit trousers designed for a sharp, polished silhouette.",
    category: "men's clothing",
    image: img5,
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Silver & Black Two-Tone T-Shirt",
    price: 168,
    description:
      "Two-tone t-shirt featuring a silver-grey body with black accents for a modern streetwear look.",
    category: "men's clothing",
    image: img6,
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "white T-shirt Relaxed ",
    price: 9.99,
    description:
      "Warm white  T-shirt with a relaxed cut, ideal for cooler weather layering.",
    category: "men's clothing",
    image: img7,
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Burgundy Casual T-Shirt",
    price: 11.99,
    description:
      "Rich burgundy t-shirt with a soft, comfortable fit suited for everyday casual wear.",
    category: "men's clothing",
    image: img8,
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "Abstract Line Art Short-Sleeve Cuban Collar Shirt",
    price: 64,
    description:
      "abstract Line t-shirt with a relaxed fit and durable stitching for everyday comfort.",
    category: "men's clothing",
    image: img9,
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "White Two-Piece Suit ",
    price: 109,
    description:
      "Clean white two-piece suit set offering a refined, elevated casual look.",
    category: "men's clothing",
    image: img10,
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title: "White Graphic Print T-Shirt",
    price: 109,
    description:
      "White t-shirt featuring an eye-catching graphic print design on the front.",
    category: "men's clothing",
    image: img11,
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title: "white T-Shirt ",
    price: 114,
    description:
      "Grey t-shirt with a bold black circular graphic print at the center.",
    category: "men's clothing",
    image: img12,
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Gray Floral Print T-Shirt",
    price: 599,
    description:
      "Gary t-shirt with a delicate floral print, adding a soft man touch to a casual outfit.",
    category: "Man's clothing",
    image: img13,
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title: "Slim-Fit Olive Green Utility Trousers",
    price: 999.99,
    description:
      "Soft white t-shirt, a versatile piece easy to pair with any outfit.",
    category: "Man's clothing",
    image: img14,
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "hort-sleeve button-up shirt",
    price: 56.99,
    description:
      "Lightweight white t-shirt with a comfortable, breathable fabric.",
    category: "Man's clothing",
    image: img15,
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title: "Black Tonal Graphic T-Shirt",
    price: 29.95,
    description:
      "Black t-shirt featuring a dark tonal graphic design for an edgy look.",
    category: "women's clothing",
    image: img16,
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Black Bird & Botanical Line-Art T-Shirt   ",
    price: 39.99,
    description:
      "Features off-white line-art illustrations, including a bird and floral motifs positioned on the upper-left chest and a flower graphic on the lower-right hem..",
    category: "men's clothing",
    image: img17,
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "Classic black Cotton trousers",
    price: 9.85,
    description:
      "Classic Black t-shirt made from soft cotton, perfect for casual wear.",
    category: "women's clothing",
    image: img18,
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Elegant black T-shirt ",
    price: 7.95,
    description:
      "Elegant T-shirt set combining comfort and style for formal or semi-formal occasions.",
    category: "men's clothing",
    image: img19,
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "black  with white woodie ",
    price: 12.2,
    description:
      "White Pants with a distinctive  design, adding personality to a simple silhouette.",
    category: "Man's clothing",
    image: img21,
    rating: { rate: 3.6, count: 145 },
  },

  {
    id: 21,
    title: "black Woodie  ",
    price: 12.99,
    description:
      "black white  woodie with a distinctive  design, adding personality to a simple silhouette.",
    category: "Man's clothing",
    image: img10,
    rating: { rate: 3.6, count: 145 },
  },

  {
    id: 22,
    title: "white Woodie  ",
    price: 12.99,
    description:
      "black white  woodie with a distinctive  design, adding personality to a simple silhouette.",
    category: "Man's clothing",
    image: img16,
    rating: { rate: 3.6, count: 145 },
  },
];

export default products;
