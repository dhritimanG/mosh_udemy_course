const http = require('http');

const server = http.createServer();

// Create a Listener for HTTP requests
// In real world applications we never do this as this is too low level
server.on('connection', (socket) => {
    console.log("Listening on port 3000");
})

// Mention the port on which this HTTP Server will be listening to
// HTTP requests
server.listen(3000);

console.log("Hello World");

