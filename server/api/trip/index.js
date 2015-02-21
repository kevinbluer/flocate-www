'use strict';

var express = require('express');
var controller = require('./trip.controller');

var router = express.Router();

router.get('/:tripId', controller.getTripByTripId);
router.post('/:tripId', controller.updateTripByTripId);
router.get('/get/:username', controller.getAllByUserId);
router.post('/add', controller.add);
router.post('/addCheckinToTrip', controller.addCheckinToTrip);

module.exports = router;