'use strict';

module.exports = function(config) {
  config.set({
    basePath: '../../../',
    frameworks: ['jasmine'],
    files: [
      // bower:js
      'public/lib/jquery/dist/jquery.js',
      'public/lib/angular/angular.js',
      // endbower
      'public/lib/angular-mocks/angular-mocks.js',
      'public/*.js',
      'public/controllers/*.js',
      'public/services/*.js',
      'test/unit/client/*-spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
