'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // bower:js
      'public/components/jquery/dist/jquery.js',
      'public/components/angular/angular.js',
      // endbower
      'public/components/angular-mocks/angular-mocks.js',
      'public/*.js',
      'public/controllers/*.js',
      'public/services/*.js',
      'test/client/*Spec.js'
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
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
