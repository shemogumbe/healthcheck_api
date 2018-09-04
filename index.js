/*
* Server instance file
*/

const http = require('http');

// create a server instance
const server = http.createServer(function(request, response){
    response.end("Welcome To Health checks");
})

// serve and listen on a port
server.listen(3000, function(){
    console.log("The server is listening on port 3000!");
})