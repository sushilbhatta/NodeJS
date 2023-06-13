const path=require('path')
const bodyParser = require('body-parser');
const express=require('express');

const adminData=require('./routes/admin')
const shopRoutes=require('./routes/shop')

const app=express()
app.set('view engine','pug');
app.set('views','views')

//body parsing
app.use(bodyParser.urlencoded({extended:false}))

//serving css file statically
app.use(express.static(path.join(__dirname,'public')))

// routes
app.use('/admin',adminData.routes)
app.use(shopRoutes)

// 404 error handling
app.use((req,res,next)=>{
    res.status(404).render('404',{docTitle:'Page not found'})
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

// server listner
app.listen(5000,()=>{
    console.log('port is running at port  5000')
})

