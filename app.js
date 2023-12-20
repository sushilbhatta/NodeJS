// modules imported remotely
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// modules imported  locally
const mongoConnect = require("./util/database");
// const errorController = require("./controllers/error");
// const sequelize = require("./util/database");
// const adminRoutes = require("./routes/admin");
// // const shopRoutes = require("./routes/shop");
// const Product = require("./models/product");
// const User = require("./models/user");
// const Cart = require("./models/cart");
// const CartItem = require("./models/cart-item");
// const Order = require("./models/order");
// const OrderItem = require("./models/order-item");

//express middleware
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.use((req, res, next) => {
//   User.findByPk(1)
//     .then((user) => {
//       req.user = user;
//       // console.log(user);
//       next();
//     })
//     .catch((error) => console.log(error));
// });

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);
// app.use(errorController.get404);
mongoConnect((client) => {
  console.log(client);
  app.listen(5000);
});
// Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });

// sequelize
//   // .sync({ force: true })
//   .sync() //creating the user
//   .then((results) => {
//     // console.log(results);
//     return User.findByPk(1);
//   })
//   .then((user) => {
//     if (!user) {
//       return User.create({ name: "sushil", email: "test2@gmail.com" });
//     }
//     return user;
//   })
//   .then((user) => {
//     // console.log(user);
//     return user.createCart();
//   })
//   .then((cart) => {
//     app.listen(5000);
//   })
//   .catch((err) => console.log(err));
