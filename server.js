/**
 * Just for testing
 */

var express = require('express');
var app = express();

app.get('/feed.php', function(req, res) {
  res.sendfile('feed.json', { root: __dirname });
});

app.use(express.static(__dirname));

app.get('/*', function(req, res) {
  res.sendfile('index.html', { root: __dirname });
});

app.listen(3000);