const path = require("path");
const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

//routes
router.get("/", shopController.getIndex); //home route

router.get("/products",shopController.getProducts); //all product routes
router.get('/cart',shopController.getCart)//cart route
router.get('/checkout',shopController.getCheckout)

module.exports = router;
