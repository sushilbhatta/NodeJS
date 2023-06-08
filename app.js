 const http=require('http')
 function rqListner(req,res){}
 const server=http.createServer((req,res)=>{
console.log(req)
 });
server.listen(5000,()=>{
    console.log("Server is running at port 3000")
});