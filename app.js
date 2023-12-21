// modules imported remotely
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// modules imported  locally
const mongoConnect = require("./util/database").mongoConnect;
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
app.use((req, res, next) => {
  // User.findByPk(1)
  //   .then((user) => {
  //     req.user = user;
  //     // console.log(user);
  //     next();
  //   })
  //   .catch((error) => console.log(error));
  next();
});

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);
// app.use(errorController.get404);
mongoConnect(() => {
  // console.log(client);
  app.listen(5000);
});
