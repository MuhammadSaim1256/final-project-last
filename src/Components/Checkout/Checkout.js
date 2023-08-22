import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import Container from "../Container/Container";
import "./style.css";

const Checkout = () => {
  let navigate = useNavigate();
  const { items, emptyCart, cartTotal } = useCart();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderDenied, setOrderDenied] = useState(false);
  useEffect(() => {
    if (orderSuccess) {
      setTimeout(() => {
        setOrderSuccess(false);
      }, 3000);
    }
  }, [orderSuccess]);
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const customerDataHandler = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const customerDataSubmitHandler = (e) => {
    e.preventDefault();

    const orderData = {
      customer: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        city: customer.city,
        state: customer.state,
        zip: customer.zip,
      },
      items: items.map((item) => ({
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
    };

    const { firstName, lastName, email, phone, address, city, state, zip } =
      orderData.customer;

    if (
      firstName &&
      lastName &&
      email &&
      phone &&
      address &&
      city &&
      state &&
      zip.length > 0
    ) {
      axios
        .post("http://localhost:5000/api/checkout", orderData)
        .then((response) => {
          console.log("Order placed successfully:", response.data);

          setCustomer({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
          });

          emptyCart();
          navigate("/shop");
        })
        .catch((error) => {
          console.error("Error placing order:", error);
        });
      setOrderSuccess(true);
    } else {
      setOrderDenied(true);
      setOrderSuccess(false);
    }
  };

  return (
    <>
      {orderSuccess ? (
        <Container>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div className="checkoutone">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ marginRight: "1.67rem" }}
              />
              Your order has been successfully placed!
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setOrderSuccess(false)}
                style={{ marginLeft: "1.67rem" }}
              />
            </div>
          </div>
        </Container>
      ) : null}{" "}
      {orderDenied ? (
        <Container>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <div className="checkoutone">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ marginRight: "1.67rem" }}
              />
              Something went wrong. Please try again.
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setOrderDenied(true)}
                style={{ marginLeft: "1.67rem", cursor: "pointer" }}
              />
            </div>
          </div>
        </Container>
      ) : null}{" "}
      <div id="billing">
        <div className="billing">
          <h1>Billing Details</h1>
          <form>
            <div className="inputs">
              <div className="name">
                <input
                  type="text"
                  name="firstName"
                  id="firstname"
                  value={customer.firstName}
                  onChange={customerDataHandler}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  value={customer.lastName}
                  onChange={customerDataHandler}
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                id="email"
                value={customer.email}
                onChange={customerDataHandler}
                placeholder="Email"
                name="email"
                required
              />
              <input
                type="number"
                id="phone"
                value={customer.phone}
                onChange={customerDataHandler}
                placeholder="Phone"
                name="phone"
                required
              />
              <input
                type="text"
                id="address"
                value={customer.address}
                onChange={customerDataHandler}
                placeholder="Address"
                name="address"
                required
              />
              <input
                type="text"
                id="city"
                value={customer.city}
                onChange={customerDataHandler}
                placeholder="City"
                name="city"
                required
              />
              <input
                type="text"
                id="state"
                value={customer.state}
                onChange={customerDataHandler}
                placeholder="State"
                name="state"
                required
              />
              <input
                type="number"
                id="zip"
                value={customer.zip}
                onChange={customerDataHandler}
                placeholder="Zip"
                name="zip"
                required
              />
            </div>
          </form>
        </div>
        <div className="checkout">
          <table>
            <tbody>
              {items.map((item) => (
                <>
                  <tr className="cart-item-cart" key={item.id}>
                    <td
                      className="cart-item-image"
                      style={{ maxWidth: "130px" }}
                    >
                      <img src={item.img} alt="" />
                    </td>
                    <td>
                      <div className="cart-item-title">{item.title}</div>
                      <div className="cart-item-price">${item.price}.00</div>
                    </td>
                    <td
                      className="cart-item-total"
                      style={{ paddingLeft: "9.3rem" }}
                    >
                      ${item.price * item.quantity}.00
                      <div>
                        QTY &nbsp;
                        {item.quantity}
                      </div>
                    </td>
                  </tr>
                </>
              ))}
              <tr>
                <td
                  className="cart-item-total"
                  style={{
                    margin: "0",
                    padding: "1.25rem 0",
                    paddingLeft: "1.67rem",
                    borderBottom: "1px solid gainsboro",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Shipping rate:
                  <div style={{ paddingRight: "1.67rem", fontWeight: "500" }}>
                    ${cartTotal * (0.01).toFixed(2)}
                  </div>
                </td>
                <td
                  className="cart-item-total"
                  style={{
                    margin: "0",
                    padding: "1.25rem 0",
                    paddingLeft: "1.67rem",
                    borderBottom: "1px solid gainsboro",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Total:
                  <div style={{ paddingRight: "1.67rem", fontWeight: "500" }}>
                    ${cartTotal}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn"
            type="button"
            onClick={customerDataSubmitHandler}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
