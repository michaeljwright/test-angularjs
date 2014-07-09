/**
 * Just for testing
 */

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/feed.php', function(req, res) {
  var callback = req.query.jsonp || 'JSON_CALLBACK';
  res.setHeader('Content-Type', 'application/javascript');
  fs.readFile('feed.js', 'utf8', function (err,data) {
    res.send(data.replace('JSON_CALLBACK', callback));
  });
});

app.use(express.static(__dirname));

app.get('/*', function(req, res) {
  res.sendfile('index.html', { root: __dirname });
});

app.listen(3000);