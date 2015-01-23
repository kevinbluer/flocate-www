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

  // TODO - Put in error handling

  var Parse = require('parse').Parse;
  Parse.initialize("VVbJ2YjOdDJrY7sZw8fF4R1v2Wolgf3toi4o5SW0", "4zEOZdifrLJxr2exozJMGsE8SB7zmnienaMMsjTF");
  res.json(Parse.User.current());
};