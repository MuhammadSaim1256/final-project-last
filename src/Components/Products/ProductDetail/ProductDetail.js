import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Container from "../../Container/Container";
import First from "../image 488.png";
import "./style.css";
import { useCart } from "react-use-cart";

const ProductDetail = ({ product }) => {
  const { items, updateItemQuantity } = useCart();
  return (
    <Container>
      <div id="product-detail">
        <div className="product-detail">
          <div className="product-detail-img">
            <img src={First} alt="none" />
          </div>
          <div className="product-detail-text">
            <div className="product-det-title">
              <h2>H!</h2>
            </div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="product-det-price">
              <h1>$</h1>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  updateItemQuantity(product.id, items.quantity - 1)
                }
              >
                -
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={() =>
                  updateItemQuantity(product.id, product.quantity + 1)
                }
              >
                +
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis provident atque libero repellendus eos repudiandae a
              officia! Nisi autem, fugit necessitatibus voluptates quam quisquam
              eum, unde nulla error veniam voluptatem a. Commodi iure velit
              accusantium expedita quam esse id, praesentium magni distinctio
              blanditiis temporibus itaque laudantium possimus facilis quis
              reiciendis.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
