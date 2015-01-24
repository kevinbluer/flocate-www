'use strict';

var express = require('express');
var controller = require('./checkin.controller');

var router = express.Router();

// TODO refactor the route names

router.get('/checkinsByCountry', controller.checkinsByCountry);
router.get('/getStarredCheckins', controller.getStarredCheckins);
router.get('/checkinById', controller.checkinById);
router.get('/allCheckins', controller.allCheckins);
router.post('/', controller.index);
router.post('/star', controller.starCheckin);

module.exports = router;