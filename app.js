const http=require('http')
const routes=require('./routes.js')
 const server=http.createServer(routes);
server.listen(5000,()=>{
    console.log("Server is runni ng at port 5000")
}); 
