import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import Container from "../Container/Container";
import "./style.css";

const Services = () => {
  return (
    <Container>
      <div className="shipping">
        <div className="icon">
          <FontAwesomeIcon icon={faTruckFast} />
        </div>
        <div className="title">
          <h4>Free Shipping</h4>
          <p>Get free shipping over $1499</p>
        </div>
      </div>
      <div className="payment">
        <div className="icon">
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <div className="title">
          <h4>Quick Payment</h4>
          <p>Online Quick Payment easily</p>
        </div>
      </div>
      <div className="return">
        <div className="icon">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="title">
          <h4>Easy Return</h4>
          <p>Easy return within 24 hours</p>
        </div>
      </div>
      <div className="support">
        <div className="icon">
          <FontAwesomeIcon icon={faHeadphones} />
        </div>
        <div className="title">
          <h4>24/7 Support</h4>
          <p>Customer Online Support</p>
        </div>
      </div>
    </Container>
  );
};

export default Services;
