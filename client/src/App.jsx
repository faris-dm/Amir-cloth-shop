import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Icon from "./pages/icon";
import ProductsDetails from "./pages/componts/ProductsDetails";
import Products from "./pages/products";
import Accordion from "./pages/Accordion";
import counter from "./pages/counter";
import Props from "./pages/props/props";
import Sidebar from "./pages/componts/sidebar";
import SearchSection from "./pages/componts/search";
import Filter from "./pages/Js_Filter";
// this is in the listProducts folder
import ListProducts from "./pages/listproducts/List";
import CheckOut from "./pages/componts/CheckOut";
import Bag from "./pages/componts/Bag";

function App() {
  return (
    <div>
      <Products />
      {/* <Navbar /> */}
      {/* <ProductsDetails /> */}
      <Bag />
      {/* <CheckOut /> */}
      {/* <ListProducts /> */}
      {/* <Props /> */}
      {/* <Home /> */}

      {/* <Sidebar /> */}
      {/* <Accordion /> */}

      {/* <Filter /> */}
    </div>
  );
}

export default App;
