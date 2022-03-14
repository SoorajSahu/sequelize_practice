const express = require("express");
const { User } = require("../dbconn");
const app = express.Router(); // Router

app.get("/", (req, res) => {
  res.send("User Part");
});

app.get("/add", async (req, res) => {


  User.create({
    name: "Aman",
    age: 25,
    email: "aman@gmail.com",
    city: "Bhopal",
  }).then(() => {
    console.log("User is added");
  });

  let data = await User.findAll(); // it will take some time
  res.json(data);
});

module.exports = app;
