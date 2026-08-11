import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home  from "../Home"
import Navbar from '../Navbar'
import Sidebar from "../componts/sidebar"
import ListProducts from "../listproducts/List"
import PeodactDetails from "../componts/ProductsDetails"
import NotFound from "../Register/notFound"
import CheckOut from "../componts/CheckOut"
import Bag from "../componts/Bag"
import Register from "../Register/Register";



function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ListProducts />} />
      <Route path="/details" element={<PeodactDetails />} />
      <Route path="/cart" element={<CheckOut />} />
      <Route path="/Bag" element={<Bag />} />
      <Route path="/User" element={<Register />} />
      {/* Catch-all 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoute