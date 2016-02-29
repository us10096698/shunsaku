'use strict';

describe('GET /', function() {

  beforeEach(function() {
    browser.get('/');
    disableAnimation();
  });

  it('should pass', function() {
    expect(true).toBe(true);
  });

  function disableAnimation() {
    $('body').allowAnimations(false);
    browser.executeScript("document.body.className += ' notransition';");
  }

});

