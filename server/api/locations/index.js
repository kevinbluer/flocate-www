'use strict';

var express = require('express');
var controller = require('./locations.controller');

var router = express.Router();

router.get('/:username', controller.index);
router.get('/:username/:count', controller.index);
router.post('/getCountryDetails', controller.getCountryDetails);

module.exports = router;