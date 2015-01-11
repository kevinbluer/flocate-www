/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/user', require('./api/user'));
  app.use('/api/trip', require('./api/trip'));
  app.use('/api/checkin', require('./api/checkin'));
  app.use('/api/checkin/checkinById', require('./api/checkin'));
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/locations', require('./api/locations'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));
  
  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
