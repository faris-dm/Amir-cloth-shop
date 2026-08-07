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



function App() {
  return (
    <div>
      {/* <Products /> */}
      <Navbar />
      <ProductsDetails />
      {/* <ListProducts /> */}
      {/* <Props /> */}
      {/* <Home /> */}

      {/* <Sidebar /> */}
      {/* <Accordion /> */}
      {/* <counter /> */}
      {/* <Products /> */}
      {/* <Filter /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
