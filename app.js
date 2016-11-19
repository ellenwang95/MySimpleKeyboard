var express = require('express');
var app = express();
var path = require("path");
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var routes = require('./router/routes');
var db = require('./db/db');

app.use(bodyParser.urlencoded({ extended: true })); 

// /css, /js 
app.use(express.static(__dirname + '/public'));
// /db
app.use('/db',express.static(path.join(__dirname, '/db')));

//routing 
app.set('view engine', 'pug');
app.use('/', routes);

//listen for requested words
io.on('connection', function (socket) {
	socket.on('keydown', function(keycode) {
		if(keycode == 13) { //enter
			socket.emit('update', {more: true});
			return;
		}
		db.get(keycode, function (value) {
			socket.emit('update', value);
		})
	})
});

server.listen(3000);
console.log("Running at Port 3000");

module.exports = app;
