'use strict';

var express = require('express');
var controller = require('./checkin.controller');

var router = express.Router();

router.get('/checkinById', controller.checkinById);
router.post('/', controller.index);

module.exports = router;