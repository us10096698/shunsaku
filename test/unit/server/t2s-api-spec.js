'use strict';

var t2s = require('../../../src/server/api/t2s-api');
var config = require('../../../src/server/config/config').appConfig.getInstance();
var nock = require('nock');

describe('t2s', function() {
  var t2sManager;
  var host;

  beforeEach(function() {
    t2sManager = new t2s.t2sManager();
    host = config.t2s.protocol + '://' +
      config.t2s.hostname + ':' + config.t2s.port;
  });

  it('#speechAText should return response with data from Watson t2s API', function(done) {
    var resbody = 'data';
    nock(host)
      .post(config.t2s.path)
      .reply(201, resbody);

    t2sManager.speechAText({text: 'hello'}).then(function(data) {
      expect(data.toString()).toEqual(resbody);
      done();
    });
  });

  it('#getAvailableSpeakers should return available speakers', function(done) {
    var resbody = {voices: [{name: 'Andy'}, {name: 'Mike'}]};
    var speakers = ['Andy', 'Mike'];
    nock(host)
      .get(config.t2s.cred.url + '/v1/voices')
      .reply(200, resbody);

    t2sManager.getAvailableSpeakers().then(function(data) {
      expect(data).toEqual(speakers);
      done();
    });
  });
});
