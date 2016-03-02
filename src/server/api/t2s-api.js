'use strict';

var Q = require('q');
var config = require('../config/config').appConfig.getInstance();

function t2sManager(module) {
  var handler = module || require(config.t2s.protocol);

  function speechAText(param) {
    var data = JSON.stringify(param);
    var deferred = Q.defer();

    var options = {
      hostname: config.t2s.hostname,
      path: config.t2s.path,
      method: 'POST',
      port: config.t2s.port,
      auth: config.t2s.cred.username + ':' + config.t2s.cred.password,
      headers: {
        'Content-Type'  : 'application/json'
      }
    };

    var req = handler.request(options, function(res) {
      var body = [];

      res.on('data', function(chunk) {
        body.push(chunk);
      });

      res.on('end', function() {
        deferred.resolve(Buffer.concat(body));
      });
    });

    req.on('error', function(e) {
      deferred.reject('problem with request: ' + e.message);
    });

    req.write(data);
    req.end();
    return deferred.promise;
  }

  function getAvailableSpeakers() {
    var deferred = Q.defer();

    var options = {
      hostname: config.t2s.hostname,
      path: config.t2s.cred.url + '/v1/voices',
      method: 'GET',
      port: config.t2s.port,
      auth: config.t2s.cred.username + ':' + config.t2s.cred.password
    };

    var req = handler.request(options, function(res) {
      var body = '';

      res.on('data', function(chunk) {
        body += chunk;
      });

      res.on('end', function() {
        var array = JSON.parse(body);
        var speakers = [];
        array.voices.forEach(function(speaker) {
          speakers.push(speaker.name);
        });
        deferred.resolve(speakers);
      });
    });

    req.on('error', function(e) {
      deferred.reject('problem with request: ' + e.message);
    });

    req.end();
    return deferred.promise;
  }

  return {
    speechAText: speechAText,
    getAvailableSpeakers: getAvailableSpeakers
  };
}

module.exports = {t2sManager : t2sManager};

