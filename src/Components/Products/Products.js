import React, { useState, createContext, useEffect } from "react";
import ProductItem from "./ProductItem/ProductItem";
import Container from "../Container/Container";
import First from "./image 488.png";
import Second from "./image 489.png";
import Third from "./image 490.png";
import Fourth from "./image 491.png";
import Eight from "./image 492.png";
import Seven from "./image 493.png";
import Six from "./image 494.png";
import Five from "./image 495.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

// Create a context
const ProductContext = createContext();

const Products = ({ children }) => {
  const [addCart, setAddCart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAddCart(false);
    }, 2000);
  }, [addCart]);
  const productData = {
    firstFour: [
      {
        id: 1,
        title: "Green Armchair",
        price: 380,
        cutPrice: 450,
        img: First,
      },
      {
        id: 2,
        title: "Bamboo Lamp",
        price: 86,
        cutPrice: 380,
        img: Second,
      },
      {
        id: 3,
        title: "Vevet Chair",
        price: 74,
        img: Third,
      },
      {
        id: 4,
        title: "Metal Pedent Light",
        price: 270,
        cutPrice: 560.0,
        img: Fourth,
      },
    ],
  };

  const productDataItem = [
    {
      id: 5,
      title: "Linen Lamp Shade",
      price: 175,
      cutPrice: 380,
      img: Five,
    },
    {
      id: 6,
      title: "Grey Concrete Pot",
      price: 380,
      img: Six,
    },
    {
      id: 7,
      title: "Table Lamp Jute",
      price: 79,
      cutPrice: 380,
      img: Seven,
    },
    {
      id: 8,
      title: "Leaf Print Coushion",
      price: 380,
      img: Eight,
    },
  ];

  const addCartMsgHandler = () => {
    setAddCart(true);
  };

  const addCartMsgDelHandler = () => {
    setAddCart(false);
  };

  return (
    <ProductContext.Provider value={productData}>
      {children}
      <section id="product">
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            zIndex: "99999",
          }}
        >
          {addCart ? (
            <div
              className="product-animation"
              style={{
                width: "100%",
                height: "100vh",
                boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 8%)",
                backdropFilter: "blur(5px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.25rem",
                margin: "auto",
                // marginTop: "1.25rem",
                position: "fixed",
              }}
            >
              <div
                style={{
                  position: "relative",
                }}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    position: "absolute",
                    right: "1rem",
                    top: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={addCartMsgDelHandler}
                />
                <div
                  style={{
                    width: "360px",
                    height: "360px",
                    background: "rgb(255, 255, 255, 0.7)",
                    border: "2px solid white",
                    padding: "6.25rem 3.25rem",
                    fontSize: "1.37rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      marginBottom: "1.37rem",
                      width: "40px",
                      height: "40px",
                    }}
                  />
                  Added to cart
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <h1>Deal on interior moduler</h1>
        <p>Donec a mattis elit sed fermentum tellus mauris</p>
        <Container>
          {productData.firstFour.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              img={product.img}
              title={product.title}
              price={product.price}
              cutPrice={product.price}
              id={product.id}
              addProduct={addCartMsgHandler}
            />
          ))}
        </Container>
        <Container>
          {productDataItem.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              img={product.img}
              title={product.title}
              price={product.price}
              cutPrice={product.price}
              id={product.id}
              addProduct={addCartMsgHandler}
            />
          ))}
        </Container>
      </section>
    </ProductContext.Provider>
  );
};

export default Products;
export { ProductContext }; // Export the context
