'use strict';

var express = require('express');
var controller = require('./trip.controller');

var router = express.Router();

router.get('/:tripId', controller.getTripByTripId);
router.get('/get/:username', controller.getAllByUserId);
router.post('/add', controller.add);

module.exports = router;