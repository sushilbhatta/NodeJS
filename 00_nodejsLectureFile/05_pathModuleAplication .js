router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})


//Here ,the __dirname gives the absolute path
// ..or ../ is used to go back one step  and then views and add-product.html is concated.
