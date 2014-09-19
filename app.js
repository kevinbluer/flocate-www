// for express
var express = require('express');
var mongoose = require('mongoose');
var Parse = require('parse').Parse;

var Parse = require('parse').Parse;
 
Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

// create the express instance
var app = module.exports = express.createServer();

var Entity = require('./models/entity.js');

// configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ secret: "scaffold session" }))
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// environment configuration
app.configure('development', function(){
  mongoose.connect('mongodb://blueradmin:blueradm1n@kahana.mongohq.com:10015/bluer-api');
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

});

app.configure('production', function(){
  mongoose.connect('mongodb://blueradmin:blueradm1n@kahana.mongohq.com:10015/bluer-api');
    app.use(express.errorHandler());

});

// **********************
// register web endpoints
// **********************

app.get('/', function(req, res) {
	
  Entity.find().sort({date: -1}).exec(function(err, items) {
  	res.render('map.ejs', { 
      layout: true,
      items: items
    });
  });

});

app.get('/1/kevinbluer/latest', function(req, res) {

  res.header('Access-Control-Allow-Origin', 'api.bluer.com');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  var Checkin = Parse.Object.extend("Checkin");
  var query = new Parse.Query(Checkin);
  query.get("C09oYmGlav", {
    success: function(checkin) {
      // The object was retrieved successfully.
      res.send(checkin);
    },
    error: function(object, error) {
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
    }
  });

});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Flocate is Listening on " + port);
});