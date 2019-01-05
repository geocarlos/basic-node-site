const http = require('http');
const fs = require('fs');
const route = require('./router');

http.createServer((req, res)=>{
    try{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(route(req.url))
    } catch(e){
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(route('404'))
    }
}).listen(
    3001, () =>{
        console.log("Running on port 3001");
    }
)