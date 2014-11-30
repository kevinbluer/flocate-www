'use strict';

var express = require('express');
var controller = require('./trip.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/add', controller.add);

module.exports = router;