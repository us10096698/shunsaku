'use strict';

describe('HelloController', function() {
  beforeEach(module('myapp'));

  var $controller, $httpBackend;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('#setTagline should set a message', function() {
    var controller = $controller('HelloController');
    controller.setTagline('test');

    expect(controller.tagline).toEqual('test');
  });

  it('#getMessage should get a message from API', function() {
    var controller = $controller('HelloController');
    $httpBackend.expectGET('/api/hello/say?message=fake').respond(200, 'fake');

    controller.process('fake');
    $httpBackend.flush();

    expect(controller.tagline).toBe('fake');
  });
});
