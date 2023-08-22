const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  try {
    const newOrder = new Order({
      customer: req.body.customer, // Extract customer data
      items: req.body.items, // Extract items data
    });

    const savedOrder = await newOrder.save();
    console.log("Saved order:", savedOrder);
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
