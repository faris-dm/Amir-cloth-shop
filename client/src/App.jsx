import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./pages/props/Route"
import Navbar from "./pages/Navbar";
import Footer from "./pages/componts/Footer";

// import Filter from "./pages/Js_Filter";
// this is in the listProducts folder


function App() {
  return (
    <div>
   
      {/* <ListProducts /> */}
     

      <BrowserRouter>
      <Navbar />
      <main>
        <AppRoute />
      </main>

<Footer />
      </BrowserRouter>

      {/* <Filter /> */}
    </div>
  );
}

export default App;
