const path = require("path");
const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();

//routes
router.get("/", productsController.getProducts); //home route

router.get("/products"); //all product routes
router.get('/cart')//cart route
router.get('/checkout')

module.exports = router;
