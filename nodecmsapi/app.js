var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var {database} = require("./config/database");

mongoose.connect(database, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db is connected!")
});

//init app
var app = express();

//prettify json
app.set('json spaces', 40);

//bodyparser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//start the server
var port = 3000;
app.listen(port, function() {
    console.log('Server running at ' + port);
});