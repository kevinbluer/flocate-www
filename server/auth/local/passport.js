var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
    },
    function(username, password, done) {

      User.logIn(username.toLowerCase(), password, {
        success: function(user) {

          return done(null, user);
        },
        error: function(user, error) {

          return done(null, false, { message: 'Unable to log in.' });
        }
      });
    }
  ));
};