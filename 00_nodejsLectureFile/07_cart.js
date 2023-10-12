// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'cart.json'
// );

// module.exports = class Cart {
//   static addProduct(id, productPrice) {
//     // Fetch the previous cart
//     fs.readFile(p, (err, fileContent) => {//==> filecontent refers to the file that fs module will read ie "p"
//       let cart = { products: [], totalPrice: 0 };//two key object created
//       if (!err) {//if no error then file will be parsed.
//         cart = JSON.parse(fileContent);
//       }
//       // Analyze the cart => Find existing product
//       const existingProductIndex = cart.products.findIndex(
//         prod => prod.id === id//cart ma already product xa ki xaina check garxa
//       );
//       const existingProduct = cart.products[existingProductIndex];
//       let updatedProduct;
//       // Add new product/ increase quantity
//       if (existingProduct) {
//         updatedProduct = { ...existingProduct }; // converted the arry into obj
//         updatedProduct.qty = updatedProduct.qty + 1;//quantaty incread by one
//         cart.products = [...cart.products];
//         cart.products[existingProductIndex] = updatedProduct;
//       } else {
//         updatedProduct = { id: id, qty: 1 };
//         cart.products = [...cart.products, updatedProduct];
//       }
//       cart.totalPrice = cart.totalPrice + +productPrice;
//       fs.writeFile(p, JSON.stringify(cart), err => {
//         console.log(err);
//       });
//     });
//   }
//   //delete item from cart
//   static deleteProduct(id,productPrice){ //we ll need the product price cause deleting the cart item will change the total cart item price
//     fs.readFile(p,(err,fileContent)=>{
//       if(err){
//         return;//if due to any reason cart is not red then it will not have anything to delete .
//       }
//      //the below line parse the file  into js object.
//       const updatedCart={...JSON.parse(fileContent)}

//       //product id is matched with the selected product's id.If matched it is returned.
//       const product=updatedCart.products.find(prod=>prod.id===id)
//       if(!product) {
//         return
//       }
//       //object key qty: is accessed. it holds the number of the particular items.
//       const productQty=product.qty

//       //product of the updaeted cart  are filtered.those product items whose id do not matches the selected items id is returned
//       updatedCart.products=updatedCart.products.filter(prod=>prod.id!==id)

//       //total cart price is updated
//       updatedCart.totalPrice=updatedCart.totalPrice-productPrice*productQty

//       // write the updated products to the file
//       fs.writeFile(p,JSON.stringify(updatedCart),err=>{console.log(err)})
//     })

//   }
//  static  getCart(cb){
//     fs.readFile(p,(err,fileContent)=>{
//       const cart=JSON.parse(fileContent)
//       if(err){
//         cb(null)
//       }else{
//         cb(cart)
//       }
//     })
//   }
// };
