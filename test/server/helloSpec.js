'use strict';
var hello = require('../../app/api/hello');

describe('hello API', function() {
  var req, res;

  beforeEach( function() {
    req = {};
    res = {
      send: jasmine.createSpy().and.callFake(function(msg){
        return this;
      })
    };
  });

  afterEach(function() {
    expect(res.send.calls.count()).toEqual(1);
  });

  it('GET / should return response with a processed message', function() {
    req = {query: {message: 'hello'}};
    hello.say(req, res);
    expect(res.send).toHaveBeenCalledWith('Say hello from server! Your query: hello');
  });
});
