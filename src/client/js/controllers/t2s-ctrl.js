'use strict';

angular.module('shunsaku').controller('T2sController', T2sController);

T2sController.$inject = ['$http', 'ngAudio'];

function T2sController($http, ngAudio) {
  var vm = this;

  vm.scripts = [];
  vm.speakers = [];

  vm.firstText = {sentence:'', speaker:''};
  vm.secondText = {sentence:'', speaker:''};

  vm.speechAText = speechAText;
  vm.playAudio = playAudio;
  vm.addScript = addScript;
  vm.getAvailableSpeakers = getAvailableSpeakers;

  vm.setSpeaker = {
    first: function(speaker) {
      vm.firstText.speaker = speaker;
    },
    second: function(speaker) {
      vm.secondText.speaker = speaker;
    }
  };

  function addScript() {
    vm.scripts.push ({
      first:{
        sentence: vm.firstText.sentence,
        speaker: vm.firstText.speaker
      },
      second: {
        sentence: vm.secondText.sentence,
        speaker: vm.secondText.speaker
      }
    });
  }

  function speechAText(script) {
    $http({
      url: '/api/t2s',
      method: 'POST',
      data: JSON.stringify({text: script.sentence}),
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(res) {
      var src = (window.URL || window.webkitURL).createObjectURL(res.data);
      vm.playAudio(src);
    }, function(err) {
      console.log(err);
    });
  }

  function playAudio(srcData) {
    ngAudio.load(srcData).play();
  }

  function getAvailableSpeakers() {
    $http({
      url: '/api/t2s/speakers',
      method: 'GET'
    }).then(function(res) {
      vm.speakers = res.data;
    });
  }
}
