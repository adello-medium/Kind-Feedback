const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

//setup
let app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var counter = 0;


let requestCurrentlyProcessed = true;
let lock = false;
let requested = false;

//start server
app.listen(8080);
console.log("Server started. Listening on 8080");




app.post('/submission', function(req, res) {
  res.render("submitted");
  console.log(req.body);
  let jsObject = {};
  jsObject.type = 1;
  jsObject.id = req.body.id;
  fs.writeFileSync("../userDetails.json", JSON.stringify(jsObject));
  res.end();
});

//home page
app.get('/', function(req, res) {
  res.render("questionaire");
  res.end();
});
