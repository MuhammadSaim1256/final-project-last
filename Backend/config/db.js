const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

function connectDB() {
  mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

module.exports = connectDB;
