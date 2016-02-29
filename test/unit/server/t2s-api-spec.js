'use strict';

var t2s = require('../../../src/server/api/t2s-api');
var config = require('../../../src/server/config/config').appConfig.getInstance();
var nock = require('nock');

describe('t2s', function() {
  var t2sManager;

  beforeEach(function() {
    t2sManager = new t2s.t2sManager();
  });

  it('#speechAText should return response with data from Watson t2s API', function(done) {
    var host = config.t2s.protocol + '://' +
      config.t2s.hostname + ':' + config.t2s.port;

    var resbody = 'data';

    nock(host)
      .post(config.t2s.path)
      .reply(201, resbody);

    t2sManager.speechAText({text: 'hello'}).then(function(data) {
      expect(data.toString()).toEqual(resbody);
      done();
    });
  });
});
