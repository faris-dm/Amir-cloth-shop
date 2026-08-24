const img1 = "/images/small.png";
const img2 = "/images/standMan.png";
const img3 = "/images/halfCloth.png";
const img4 = "/images/slow.png";
const img5 = "/images/blackshirt.png";
const img6 = "/images/Black_shirt.png";
const img7 = "/images/pw_Tishirt.png";
const img8 = "/images/back.png";
const img9 = "/images/t-shirt.png";
const img10 = "/images/small.png";
const img11 = "/images/sitMan.png";
const img12 = "/images/whiteMan.png";
const img13 = "/images/glass.png";
const img14 = "/images/standMan.png";
const img15 = "/images/t-shirt.png";
const img16 = "/images/sitMan.png";
const img17 = "/images/Black_shirt.png";
const img18 = "/images/sitMan.png";
const img19 = "/images/blackshirt.png";
const img20 = "/images/sitMan.png";

const products = [
  {
    id: 1,
    title: "Classic White Tailored Trousers",
    price: 109.95,
    description:
      "Elegant white tailored trousers with a relaxed fit, suitable for casual or semi-formal wear.",
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
    title: "Coffee Brown Relaxed Jacket",
    price: 9.99,
    description:
      "Warm coffee-brown jacket with a relaxed cut, ideal for cooler weather layering.",
    category: "men's clothing",
    image: img7,
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Burgundy Casual T-Shirt",
    price: 10.99,
    description:
      "Rich burgundy t-shirt with a soft, comfortable fit suited for everyday casual wear.",
    category: "men's clothing",
    image: img8,
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "Soft White Everyday T-Shirt",
    price: 64,
    description:
      "Soft white t-shirt with a relaxed fit and durable stitching for everyday comfort.",
    category: "men's clothing",
    image: img9,
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "White Two-Piece Suit Set",
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
    title: "Grey T-Shirt with Circle Graphic",
    price: 114,
    description:
      "Grey t-shirt with a bold black circular graphic print at the center.",
    category: "men's clothing",
    image: img12,
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "White Floral Print T-Shirt",
    price: 599,
    description:
      "White t-shirt with a delicate floral print, adding a soft feminine touch to a casual outfit.",
    category: "women's clothing",
    image: img13,
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title: "Soft White Versatile T-Shirt",
    price: 999.99,
    description:
      "Soft white t-shirt, a versatile piece easy to pair with any outfit.",
    category: "women's clothing",
    image: img14,
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "Lightweight White Cotton T-Shirt",
    price: 56.99,
    description:
      "Lightweight white t-shirt with a comfortable, breathable fabric.",
    category: "women's clothing",
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
    title: "Tailored Two-Piece Suit Set",
    price: 39.99,
    description:
      "Structured suit set with a tailored fit for a polished, professional appearance.",
    category: "men's clothing",
    image: img17,
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "Classic White Cotton T-Shirt",
    price: 9.85,
    description:
      "Classic white t-shirt made from soft cotton, perfect for casual wear.",
    category: "women's clothing",
    image: img18,
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Elegant White Suit Set",
    price: 7.95,
    description:
      "Elegant suit set combining comfort and style for formal or semi-formal occasions.",
    category: "men's clothing",
    image: img19,
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "White T-Shirt with Printed Design",
    price: 12.99,
    description:
      "White t-shirt with a distinctive printed design, adding personality to a simple silhouette.",
    category: "women's clothing",
    image: img20,
    rating: { rate: 3.6, count: 145 },
  },
];






export default products;
