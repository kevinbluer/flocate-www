'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/me', controller.me);
router.get('/:username', controller.user);

module.exports = router;