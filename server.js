var os = require('os');
var request = require('request');
var morgan = require('morgan');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
app.use(require("morgan")("dev"));

// api ---------------------------------------------------------------------
app.get('/api', function (req, res) {        
    request('http://dazhao-swarm2agents.westus.cloudapp.azure.com/api/hello', function (error, response, body) {
        res.send('Hello from service-dotnet: ' + body);
    });    
});

// application -------------------------------------------------------------
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');     // load the single view file (angular will handle the page changes on the front-end)
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Listening on port " + port);
});

