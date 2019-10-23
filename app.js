//Packege Import
const http = require('http');
const fs = require('fs');

//Server Creation
const server = http.createServer((req,res) => {
    //console.log(req.url, req.method, req.headers);
    //process.exit();
    //Response Handaling
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Hello World</title></head>');
        res.write('<body><form action="/message" method = "POST"><input type="text" name="txt"><input type="submit"></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });

        });
        
        
    }


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello World</title></head>');
    res.write('<body><h1>Welcome From my node.js Server</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(5000);