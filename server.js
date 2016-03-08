var express = require('express'),
	path = require('path'),
	http = require('http'),
	https = require('https'),
	bodyParser = require('body-parser'),
	route = require('./router'),
	cluster = require('cluster'),
	http = require('http'),
	port = 3001;

var app = express();

app.set('view engine', 'jade');
app.set('view cache', false);

app.set('views', __dirname + '/source');
app.use('/assets', express.static(__dirname + '/source/assets/'));

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.disable('x-powered-by');

app.use('/', route);

if (cluster.isMaster) {
	var numCPUs = require('os').cpus().length;

	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('online', function(worker) {
	
	});

	cluster.on('exit', function(worker, code, signal) {

        cluster.fork();
    });

} else {

	http.createServer(app).listen(port);
	// https.createServer(options, app).listen(443);
}