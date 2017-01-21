//require dependencies
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");

//create PORT to listen to and express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//write function to handle request 
function handleRequest(request, response){
	response.end("Path hit: " + request.url);
}


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/all', function (req, res) {
	res.sendFile(path.join(__dirname, 'archive.html'));
});

//create server
var server = http.createServer(handleRequest);

//start the server
server.listen(PORT, function() {
	//callback for working server
	console.log("Server listening on PORT: ", PORT);
});