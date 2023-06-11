const bodyParser = require('body-parser');
const express=require('express');

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const app=express();
app.use(bodyParser.urlencoded({extended:false}))
 
app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
    res.status(404).send('Page not found')
})

app.listen(5000,()=>{
    console.log('port is running at port  5000')
})

