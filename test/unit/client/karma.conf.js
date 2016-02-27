'use strict';

module.exports = function(config) {
  config.set({
    basePath: '../../../',
    frameworks: ['jasmine'],
    files: [
      // bower:js
      'public/lib/jquery/dist/jquery.js',
      'public/lib/angular/angular.js',
      'public/lib/angular-ui-router/release/angular-ui-router.js',
      // endbower
      'public/lib/angular-mocks/angular-mocks.js',
      'public/js/**/*.js',
      'test/unit/client/**/*-spec.js'
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
