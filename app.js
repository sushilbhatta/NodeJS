const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("First Middleware")
    next(); //this allows to continue the req to the next middleware.
});
app.use((req,res,next)=>{
    console.log('Second middleware')
    res.send('<h1>Hello from express</h1>')
})

app.listen(5000,()=>{
    console.log('port is running at port  5000')
})
//  const server=http.createServer(app);
// server.listen(5000,()=>{
//     console.log("Server is running at port 5000")
// }); 
