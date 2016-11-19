var express = require('express');
var app = express();
var path = require("path");
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var routes = require('./router/routes');

app.use(bodyParser.urlencoded({ extended: true })); 

// /css, /js 
app.use(express.static(__dirname + '/public'));

//routing 
app.set('view engine', 'pug');
app.use('/', routes);

server.listen(3000);
console.log("Running at Port 3000");

module.exports = app;
