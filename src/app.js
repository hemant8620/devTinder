const express = require("express");
const connectDB = require("./config/database");
const app = express();

connectDB()
  .then(() => {
    console.log("connected");
    app.listen(3000, () => {
      console.log("running");
    });
  })
  .catch((err) => {
    console.error("database cannot be connected");
  });
