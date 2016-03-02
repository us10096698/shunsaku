'use strict';

describe('T2sController', function() {
  beforeEach(module('shunsaku'));

  var $controller, $httpBackend;
  var controller, ngAudio;

  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    $httpBackend = $injector.get('$httpBackend');
    ngAudio = $injector.get('ngAudio');
    controller = $controller('T2sController');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('#speechAText should access its backend', function() {
    spyOn(controller, 'playAudio');

    $httpBackend.expectPOST('/api/t2s').respond(201, '');
    controller.speechAText({text: 'hello, world', voice: 'yoshio'});
    $httpBackend.flush();

    expect(controller.playAudio).toHaveBeenCalled();
  });

  it('#playAudio shuld play a sound', function() {
    var fake = {play: function() {}};

    spyOn(ngAudio, 'load').and.returnValue(fake);
    spyOn(fake, 'play');

    controller.playAudio('fake');
    expect(fake.play).toHaveBeenCalled();
  });

  it('#getAvailableSpeakes should obtain available speakers and set it to the object', function() {
    var voices = ['Andy', 'Mike'];

    $httpBackend.expectGET('/api/t2s/speakers').respond(200, voices);
    controller.getAvailableSpeakers();
    $httpBackend.flush();

    expect(controller.speakers).toEqual(voices);
  });

});
