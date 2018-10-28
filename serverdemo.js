// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 2000;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    var endpoint = req.url;
  switch(endpoint){
    
    case "/":
    fs.readFile(__dirname + "/index.html", function(err, data) {

    //res.write("food");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();})
    break;

    case "/food":
    fs.readFile(__dirname + "/food.html", function(err, data) {

    //res.write("food");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();})
    break;

    case "/movies":
    fs.readFile(__dirname + "/movies.html", function(err, data) {

    //res.write("food");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();})
    break;

    case "/frameworks":
    fs.readFile(__dirname + "/frameworks.html", function(err, data) {

    //res.write("food");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();})
    break;

    default:
    res.write("not found");
    res.end();
    break;
  }
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
