/**
 * This is the entry file of this app.
 */

// Require http built-in module
const http = require('http');
// Require our router module
const route = require('./router');
// Request child process to open site on Chrome
const child_process = require('child_process');
// Require URL node module
const url = require('url');

// Declare a port
const port = 3001;

// Use http module to create a web server and listen on the port defined in 'port'
http.createServer((req, res)=>{
    // Log requested URL to the console
    console.log(req.url);

    // Parse url
    const parsedUrl = url.parse(req.url);

    // The route function will look for a key corresponding to the provided URL so 
    // to get the value assigned to it. If the key does not exist, there will be an
    // error, which is handled in the catch part, where we pass '404' to route
    // and get the template for the 404 page.
    try{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(route(parsedUrl.pathname))
    } catch(e){
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(route('404'))
    }
}).listen(
    port, () =>{
        console.log("Running on port " + port);
        child_process.exec('google-chrome http://localhost:' + port);
    }
)