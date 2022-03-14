const Sequelize = require("sequelize");
const userModel = require("./models/user");

const sequelize = new Sequelize("sequlize_prac", "root", "", {
  host: "localhost",
  dialect: "mysql", // Type of DB
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(() => {
    console.error("Unable to connect to the database:");
  });

const User = userModel(sequelize, Sequelize);

module.exports = {
  sequelize,
  User,
};
