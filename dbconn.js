const Sequelize = require("sequelize");
const userModel = require("./models/user");

const sequelizeConnection = new Sequelize("sequlize_prac", "root", "", { // Db connection
  host: "localhost",
  dialect: "mysql", // Type of DB
});

sequelizeConnection
  .authenticate() // Connection process
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(() => {
    console.error("Unable to connect to the database:");
  });

const User = userModel(sequelizeConnection, Sequelize); //

module.exports = {
  sequelizeConnection,
  User,
};
