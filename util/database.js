const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "Sushil007", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
