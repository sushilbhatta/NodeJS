// modules imported remotely
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// modules imported  locally
const errorController = require("./controllers/error");
const sequilize = require("./util/database");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//express middleware
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
sequilize
  .sync()
  .then((results) => {
    // console.log(results);
    app.listen(5000);
  })
  .catch((err) => console.log(err));
