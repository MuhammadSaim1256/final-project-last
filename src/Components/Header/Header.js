import React from "react";
import HeroImage from "./Hero-imgae.png"; // Corrected import statement
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="hero-section">
      {" "}
      {/* Changed class to className */}
      <div className="hero-text">
        {" "}
        {/* Changed class to className */}
        <h1>Explore Our Exquisite Fragrance .</h1>
        <p>
          Unleash Your Inner Confidence with Our Alluring Fragrances and Indulge
          in a World of Scented Luxury.
        </p>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="hero-img">
        {" "}
        {/* Changed class to className */}
        <img src={HeroImage} alt="" /> {/* Use the imported image */}
      </div>
    </section>
  );
};

export default Header;
