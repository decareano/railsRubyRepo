var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");
app.get("/greet/:name", function(req, res){
   res.render("index", {

      name: req.params.name
   });
});

app.get("/facebook", function(req, res) {
  request("http://facebook.com", function(error, response, body) {
     res.render("index.ejs", {
     	content: body
     });


  });



});

app.get("/api", function(req, res){

	request("http://daretodiscover.heroku.com/users", function(error, response, body){

     //console.log(JSON.parse(body.id.firstname));
     var users = JSON.parse(body);
     for (var i = 0; i < users.length; i++) {
     	console.log(users[i].firstname);
     }
	});
});



app.listen(3000);