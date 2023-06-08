 const http=require('http')

 const server=http.createServer((req,res)=>{
    // requesting data
    console.log(req.url,req.method,req.headers);

    //sending response to the webpage
    res.setHeader('Content-Type','text/html')//browser knows html file is being sent back in resoponse.
    res.write('<html>')
    res.write('<head><title>My first Node.js Page</title></head>')
    res.write('<body><h2>i am writing the node js project</h2></body>')
    res.write('</html>')
    res.end()
 });
server.listen(5000,()=>{
    console.log("Server is running at port 5000")
});