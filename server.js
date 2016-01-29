var express = require('express'),
	path = require('path'),
	http = require('http'),
	https = require('https'),
	route = require('./router'),
	port = 3001;
var app = express();

app.set('view engine', 'jade');
app.set('view cache', false);

app.set('views', __dirname + '/source');
app.use('/assets', express.static(__dirname + '/source/assets/'));

app.get('/', route);

http.createServer(app).listen(port);
// https.createServer(options, app).listen(443);