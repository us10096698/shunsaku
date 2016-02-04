'use strict';

var express = require('express');
var router = express.Router();

var helloAPI = require('../api/hello');

router.get('/say', helloAPI.say);

module.exports = router;
