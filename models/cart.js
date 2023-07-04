const fs=require('fs')
const path=require("path")
const p=path.join(path.dirname(process.mainModule.filename),'data','cart.json')

module.exports=class cart{
    static addProduct(id,productPrice){
        //fetch the previous file
        fs.readFile(p,(err,fileContent)=>{ //==> filecontent refers to the file that fs module will read ie "p"
            let cart={products:[],totalPrice:0} //two key object created
            if(!err){ //if no error then file will be parsed.
                cart=JSON.parse(fileContent)
            }
        })
        //analyze the cart==> find the existing products
        const existingProductIndex=cart.products.findIndex((prod)=>{
            return prod.id===id;  //cart ma already product xa ki xaina check garxa
        })
        const existingProduct=cart.products[existingProductIndex]
        let updatedProduct;

        //add new products or increase quantity
        if(existingProduct){
            updatedProduct={...existingProduct} // converted the arry into obj
            updatedProduct.qty=updatedProduct.qty+1
            cart.products=[...cart.products] //quantaty incread by one
            cart.products[existingProductIndex]=updatedProduct
        }else{
            updatedProduct={id:id,qty:1}
            cart.products=[...cart.products,updatedProduct]
        }
        cart.totalPrice=cart.totalPrice + +productPrice
        fs.writeFile(p,JSON.stringify(chart),err=>{
            console.log(err)
        })   
    }
}