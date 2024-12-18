const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    // creating a new instance of the user model
    const user = new User(req.body);

    await user.save(); // Wait for the user to be saved
    res.send("user added");
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).send("Error adding user");
  }
});

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
