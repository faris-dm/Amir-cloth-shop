import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home  from "../Home"
import Navbar from '../Navbar'
import Sidebar from "../componts/sidebar"
import ListProducts from "../listproducts/List"
import ProductsDetails from "../componts/ProductsDetails"
import NotFound from "../Register/notFound"
import CheckOut from "../componts/CheckOut"
import Bag from "../componts/Bag"
import Register from "../Register/Register";
import Profile   from  "../componts/Profile"
import Admin  from "../Admin"


// C:\Users\Administrator\Desktop\e-com\Amir-cloth-shop\client\src\pages\Admin.jsx

function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ListProducts />} />
      <Route path="/products/:id" element={<ProductsDetails />} />
      <Route path="/cart" element={<CheckOut />} />
      <Route path="/Bag" element={<Bag />} />
      <Route path="/login" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path = "/admin" element={<Admin />} />
      {/*  404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoute
