'use strict';

var _ = require('lodash');
var Parse = require('parse').Parse;
Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");


exports.index = function(req, res) {
  res.json([]);
};

exports.me = function(req, res, next) {
  res.json(Parse.User.current());
};

exports.user = function(req, res, next) {

  // get by user username

  var query = new Parse.Query(Parse.User);
  query.equalTo("username", req.params.username);
  query.find({
    success: function(user) {
      
      res.json(user);

    }
  });

  

}