const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Temporary storage for orders (Replace this with a database)
const orders = [];

// Endpoint to handle placing an order
app.post("/api/place-order", (req, res) => {
  const orderDetails = req.body;

  if (!orderDetails || !orderDetails.items || !orderDetails.billingInfo) {
    return res.status(400).json({ message: "Invalid order details" });
  }

  // Process the order and store it in the orders array (Replace with database logic)
  orders.push(orderDetails);

  res.status(200).json({ message: "Order placed successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
