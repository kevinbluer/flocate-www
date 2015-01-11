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
  var userId = req.user._id;

  // TODO switch out to Parse

  // User.findOne({
  //   _id: userId
  // }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
  //   if (err) return next(err);
  //   if (!user) return res.json(401);
  //   res.json(user);
  // });
};