var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// app.get('/', function(req, res){
// 	res.send('GET request to the homepage')
// });

// // POST method route
// app.post('/', function(req, res){
// 	res.send('POST request to the homepage')
// });

app.post('/login', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})

app.get('/about', function(req, res) {
  res.send('root')
})

app.get('/example/b', function(req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function(req, res) {
  res.send('Hello from B!')
})
















//below is needed to create server.

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});
module.exports = server;