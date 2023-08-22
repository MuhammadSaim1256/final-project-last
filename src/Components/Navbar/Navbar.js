import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import Logo from "./Logo.png";
import Search from "./Search.png";
import Login from "./Login.png";
import Cart from "./Cart.png";
import "./style.css";

const Navbar = () => {
  const location = useLocation(); // Get the current location

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul>
          <li id="active">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className={location.pathname === "/shop" ? "active" : ""}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={location.pathname === "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
        </ul>
        <div className="icons">
          <div className="search">
            <Link to="/">
              <img src={Search} alt="" />
            </Link>
          </div>
          <div className="login">
            <Link to="/">
              <img src={Login} alt="" />
            </Link>
          </div>
          <div className="cart">
            <Link to="/cart">
              <img src={Cart} alt="" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
