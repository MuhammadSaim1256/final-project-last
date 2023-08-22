import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ProductDetail from "./Components/Products/ProductDetail/ProductDetail";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "react-use-cart";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import "./App.css";

const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Footer />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product/:title" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
