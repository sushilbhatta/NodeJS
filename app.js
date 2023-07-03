const path=require('path')
const bodyParser = require('body-parser');
const express=require('express');

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const errorController=require('./controllers/error')
const app=express()
// app.set('view engine','pug');
app.set('view engine','ejs')
app.set('views','views')

//body parsing
app.use(bodyParser.urlencoded({extended:false}))

//serving css file statically
app.use(express.static(path.join(__dirname,'public')))

// routes
app.use('/admin',adminRoutes)
app.use(shopRoutes)

// 404 error handling
app.use(errorController.error)

// server listner
app.listen(5000,()=>{
    console.log('port is running at port  5000')
})

