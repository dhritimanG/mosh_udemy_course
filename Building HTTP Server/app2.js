const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("You are at home page");
        res.end();
    }
    else if(req.url === "/login"){
        res.write("You are at login page");
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
})

// Mention the port on which this HTTP Server will be listening to
// HTTP requests
server.listen(3000);

console.log("Hello World");

