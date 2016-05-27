var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/', function (request, response) {

		response.sendFile(path.join(__dirname, 'views/index.html'));
  
});

app.post('/api/shorten', function (request, response) {
		var data = request.body.url;
		console.log(data);
});

app.get('/:encoded_id', function (request, response) {

});

var server = app.listen(3000, function () {
  console.log("Server listening on 3000 port");
});