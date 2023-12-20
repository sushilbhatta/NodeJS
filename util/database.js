// const Sequelize = require("sequelize");
// const sequelize = new Sequelize("node-complete", "root", "root", {
//   dialect: "mysql",
//   host: "localhost",
// });
// module.exports = sequelize;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://sushilbhatta:sushilbhatta@atlascluster.s6wi9f4.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      callback(client);
    })
    .catch((err) => console.log(err));
};
module.exports = mongoConnect;
