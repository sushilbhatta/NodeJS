const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      docTitle: 'All Products',
      path: '/',
    });
  });
};
exports.getIndex=(req,res)=>{
  Product.fetchAll(products=>{
    res.render('shop/index',{
      prods:products,
      docTitle: 'Shop',
      path: '/',
  
    })
  })
  }

exports.getCart=(req,res)=>{
  Product.fetchAll(products=>{
    res.render('shop/cart',{
      prods:products,
      docTitle: 'Cart',
      path: '/',
  
    })
  })
  }
  exports.getCheckout=(req,res)=>{
    Product.fetchAll(products=>{
      res.render('shop/checkout',{
        prods:products,
        docTitle: 'CheckOut',
        path: '/'
      })
    })
    }