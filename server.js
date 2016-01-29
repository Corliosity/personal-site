var express = require('express'),
	path = require('path');
var app = express();


app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(port, function(){
	console.log('Express App Server listening on porth %d in %s mode', port, app.settings.env);
});