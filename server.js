const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('json spaces', 1);

const port = 8080;

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
  console.log('http://localhost:' + port + '/');
});

app.get('/', function(req,res) {
  res.sendFile((path.join(__dirname + '/static/index.html')));
});
