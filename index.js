/*
* Server instance file
*/

const http = require('http');
const url = require('url');

// create a server instance
const server = http.createServer(function(request, response){
    
    // get the Url from the request 
    const parseedUrl = url.parse(request.url, true)

    // get path of the requested resource
    const path = parseedUrl.pathname

    // trim the path
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')
    console.log(trimmedPath)

    // get request method
    const method = request.method.toLocaleLowerCase()

    response.end("Welcome To Health checks");

    
    // log the requested path
    console.log("The request received for " + trimmedPath +' with method ' + method)
})

// serve and listen on a port
server.listen(3000, function(){
    console.log("The server is listening on port 3000!");
})