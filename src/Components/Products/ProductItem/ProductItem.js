import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faEye } from "@fortawesome/free-solid-svg-icons";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useCart } from "react-use-cart";
import "./style.css";

const ProductItem = ({ img, title, price, cutPrice, product, addProduct }) => {
  const [isProductOpen, setIsProductOpen] = useState(false);

  const handleClick = () => {
    setIsProductOpen(!isProductOpen);
  };

  const { addItem } = useCart();

  return (
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slide-content">
            <div className="product-main">
              <div className="action-btn">
                <div className="eye heart">
                  <Link to={`/product/${title}`}>
                    <FontAwesomeIcon icon={faEye} onClick={handleClick} />
                    {isProductOpen ? (
                      <ProductDetail
                        product={product}
                        handleClick={handleClick}
                      />
                    ) : null}
                  </Link>
                </div>

                <div className="cart-item">
                  <Link to="/shop" onClick={() => addItem(product)}>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      onClick={addProduct}
                    />
                  </Link>
                </div>
              </div>
              <span>-16%</span>
              <div className="img">
                <Link to={`/product/${title}`}>
                  <img src={img} alt="" />
                </Link>
              </div>
              <div className="slide-text">
                <div className="title">{title}</div>
                <div className="price">
                  <div className="cut-price">${cutPrice}</div>
                  <div className="official-price">${price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
