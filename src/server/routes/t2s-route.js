'use strict';

var express = require('express');
var router = express.Router();
var Q = require('q');

var t2sManager = require('../api/t2s-api').t2sManager;

function t2sRouter() {
  var manager = new t2sManager();

  router.post('/', speechAText);
  router.get('/speakers', getAvailableSpeakers);

  function speechAText(req, res) {
    Q.when(manager.speechAText(req.body)).then(function(data) {
      res.send(data);
    });
  }

  function getAvailableSpeakers(req, res) {
    Q.when(manager.getAvailableSpeakers()).then(function(data) {
      res.send(data);
    });
  }

  return {router: router};
}

module.exports = {t2sRouter: t2sRouter};
