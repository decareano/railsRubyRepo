var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get("/add/:num1/:num2", function(req, res) {
	var number1 = parseInt(req.params.num1);
	var number2 = parseInt(req.params.num2);
	var total = number1 + number2;
    res.send(total.toString());
});



app.listen(3000);