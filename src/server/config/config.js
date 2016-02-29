'use strict';

var config = (function() {

  var appEnv = require('cfenv').getAppEnv();
  var config;

  function init() {

    config = {};
    config.t2s = {};
    createHost();

    config.t2s.cred = appEnv.getServiceCreds('t2s') || {
      url:      process.env.T2S_URL,
      username: process.env.T2S_USER,
      password: process.env.T2S_PASSWORD
    };

    return config;

    function createHost() {
      var SYNTH_PATH = '/text-to-speech/api/v1/synthesize';
      var WATSON_HOST = 'stream.watsonplatform.net';
      var urlInfo = {};

      if (process.env.http_proxy) {
        var url     = require('url');
        urlInfo = url.parse(process.env.http_proxy);
      }

      config.t2s.hostname = urlInfo.hostname || WATSON_HOST;
      config.t2s.port     = urlInfo.port || 443;
      config.t2s.path     = process.env.http_proxy ? 'https://' + WATSON_HOST + SYNTH_PATH : SYNTH_PATH;
      config.t2s.protocol = process.env.http_proxy ? 'http' : 'https';
    }
  }

  return {
    getInstance: function() {
      if (!config) {
        config = init();
        console.log(config);
      }
      return config;
    }
  };

}() );

module.exports = {
  appConfig : config
};
