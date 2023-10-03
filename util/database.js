const Sequilize = require("sequelize");
const sequelize = new Sequilize("node-complete", "root", "Sushil007", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
