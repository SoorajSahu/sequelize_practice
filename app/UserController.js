const express = require("express");
const req = require("express/lib/request");
const { User } = require("../dbconn");
const { Op } = require("sequelize");
const app = express.Router(); // Router

app.post("/add", async (req, res) => {
  const body = req.body;

  User.create(body) // Create  a new column
    .then(() => {
      console.log("User is added");
    });
  let data = await User.findAll(); // it will take some time
  res.json(data);
});
// Inser, update, select, delete(Where will Use in all of them)
app.get("/", async (req, res) => {
  let data = await User.findAll({
    attributes: ["name", "email", "age"],
  }); // it will take some time
  res.json(data);
});

app.delete("/:id", (req, res) => {
  const uid = req.params.id;
  User.destroy({
    // To delete
    where: {
      id: uid,
    },
  }).then(() => {
    res.send("User id: " + uid + " is deleted");
  });
});

app.patch("/", (req, res) => {
  const age = req.body.age;
  User.update(
    { age: age }, /// Data
    {
      where: {
        age: {
          [Op.lt]: 20, // where  // name
        },
      },
    }
  ).then(() => {
    res.send("User where name contains jack is updated: ");
  }); // Update query
});

module.exports = app;
