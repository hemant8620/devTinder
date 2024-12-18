const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://hemantagarwal8620:VciSIeHzVUwzdqas@cluster0.aohfp.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
