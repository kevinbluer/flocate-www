'use strict';

var express = require('express');
var controller = require('./locations.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/getCountryDetails', controller.getCountryDetails);

module.exports = router;