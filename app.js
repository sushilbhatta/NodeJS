 const http=require('http')
const fs=require('fs')
 const server=http.createServer((req,res)=>{
    // requesting data from the browser
    // console.log(req.url,req.method,req.headers);
    const url=req.url;
    const method=req.method
    if (url==='/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">send</button></form></body>')
        //form action determine the route after the form is submitted and method Determine the method used to submit.
        res.write('</html>')
        return res.end()
    }
    if(url==='/message'&&method==='POST'){
        const body=[]
        //req.on() listen to the all the request of given parameter
        req.on('data',(chunk)=>{   //data from browser is in stream form divided in different chunk of that data.         
            body.push(chunk)        //added the chunk of data  in an empty array
            console.log(chunk)      // chunk of data look somthing like this(untraceble)==><Buffer 6d 65 73 73 61 67 65 3d 73 75 73 68 69 6c>
        })
        //we have to parse the chunk of data to human readable form.
        //end parameter tracks the end of data req from browser
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString(); //chunk data is buffered and concated and made string .
            console.log(parsedBody)                  //parsed data look like this(meaningful)  ==>  message=sushil
            const message=parsedBody.split('=')[1] //splited the message (variable name)
            fs.writeFileSync('message.txt',message);
        })
        
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end()
    }
    //sending response to the browser
    res.setHeader('Content-Type','text/html')//browser knows html file is being sent back in resoponse.
    res.write('<html>')
    res.write('<head><title>My first Node.js Page</title></head>')
    res.write('<body><h2>i am writing the node js project</h2></body>')
    res.write('</html>')
    res.end()
 });
server.listen(5000,()=>{
    console.log("Server is runni ng at port 5000")
});