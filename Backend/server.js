const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: false }));

// API Route
const checkoutRoutes = require("./routes/checkout");
app.use("/api/checkout", checkoutRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
