'use strict';

describe('GET /', function() {

  beforeEach(function() {
    browser.get('/');
    disableAnimation();
  });

  it('should return index page with greeting', function() {
    expect($('#greeting').getText()).toBe('hello, world!');
  });

  it('should update tagline when call button clicked', function() {
    $('#call').click();
    expect($('#tagline').getText()).toBe('Did you call me?');
  });

  it('should update tagline when AJAX call button clicked', function() {
    $('#ajaxcall').click();
    expect($('#tagline').getText()).toBe('Say hello from server! Your query: Did you call me?');
  });

  function disableAnimation() {
    $('body').allowAnimations(false);
    browser.executeScript("document.body.className += ' notransition';");
  }

});

