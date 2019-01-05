/**
 * This is the entry file of this app.
 */

// Require http built-in module
const http = require('http');
// Require our router module
const route = require('./router');

// Declare a port
const port = 3001;

// Use http module to create a web server and listen on the port defined in 'port'
http.createServer((req, res)=>{
    // The route function will look for a key corresponding to the provided URL so 
    // to get the value assigned to it. If the key does not exist, there will be an
    // error, which is handle in the catch part, where we pass '404' to route
    // and get the template for the 404 page.
    try{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(route(req.url))
    } catch(e){
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(route('404'))
    }
}).listen(
    port, () =>{
        console.log("Running on port " + port);
    }
)