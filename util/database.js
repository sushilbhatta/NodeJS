// const Sequelize = require("sequelize");
// const sequelize = new Sequelize("node-complete", "root", "root", {
//   dialect: "mysql",
//   host: "localhost",
// });
// module.exports = sequelize;

const mongodb = require("mongodb");
let _db;
const MongoClient = mongodb.MongoClient;
mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://sushilbhatta:sushilbhatta@atlascluster.s6wi9f4.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
const getDb = () => {
  if (_db) return _db;
  throw "No DataBase Found:";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
