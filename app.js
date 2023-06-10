const express=require('express');

const app=express();

app.use('/',(req,res,next)=>{
    console.log('this always runs')
    next()
})

app.use('/add-product',(req,res,next)=>{
    res.send('<h1>Welcome to add-product page</h1>')
})
app.use('/',(req,res,next)=>{
    console.log('Second middleware')
    res.send('<h1>Helo from express</h1>')
})


app.listen(5000,()=>{
    console.log('port is running at port  5000')
})
//  const server=http.createServer(app);
// server.listen(5000,()=>{
//     console.log("Server is running at port 5000")
// }); 
