const products=[];
exports.getAddProduct=(req,res,next)=>{
    res.render('add-product',{
        docTitle:'add-product',
        path:'/admin/add-product',
        formsCSS:true,
        productsCSS:true,
        activeAddProduct:true
    });
    // res.sendFile(path.join(rootDir,'views','add-product.html'))
}
exports.postAddProduct=(req,res)=>{
    products.push({title:req.body.title})
    res.redirect('/')
} 
exports.getProducts=(req,res,next)=>{
    res.render('shop',{
        prods:products,
        docTitle:'Shop',
        path:'/',
        hasProducts:products.length>0,
        activeShop:true,
        productCSS:true,
    })
    // console.log(prods)
    // console.log(adminData.product)
    // res.sendFile(path.join(rootDir,'views','shop.html'))
}