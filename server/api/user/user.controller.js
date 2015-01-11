'use strict';

var _ = require('lodash');

// Get list of users
exports.index = function(req, res) {
  res.json([]);
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
  // var userId = req.user._id;


  var Parse = require('parse').Parse;
  Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");

  var currentUser = Parse.User.current();

  console.log(currentUser);

  res.json(currentUser);

  // TODO switch out to Parse

  // User.findOne({
  //   _id: userId
  // }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
  //   if (err) return next(err);
  //   if (!user) return res.json(401);
  //   res.json(user);
  // });
};