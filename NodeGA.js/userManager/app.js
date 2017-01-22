var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");
app.get("/greet/:name", function(req, res){
   res.render("index", {

      name: req.params.name
   });
});

app.get("/all", function(req, res) {
  request("http://daretodiscover.herokuapp.com/users", function(error, response, body) {
    var users = JSON.parse(body);

    res.render("all", {
      allUsers: users
    });
  });
});


var bodyParser = require("body-parser");
app.get("/new", function(req, res){
  res.render("new");
});
app.use(bodyParser.urlencoded({
    extended:true
}));

app.post("/new", function(req, res) {
    request({
        method: "POST",
        uri: "http://daretodiscover.herokuapp.com/users",
        formData: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            age: req.body.age,
            username: req.body.username
        }
    }, function(error, response, body) {
        res.redirect("/all");
    });
});





app.listen(3000);