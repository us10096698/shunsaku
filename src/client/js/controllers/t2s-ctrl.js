'use strict';

angular.module('shunsaku').controller('T2sController', T2sController);

T2sController.$inject = ['$http', 'ngAudio'];

function T2sController($http, ngAudio) {
  var vm = this;
  vm.text = '';
  vm.speechAText = speechAText;
  vm.playAudio = playAudio;

  function speechAText() {

    $http({
      url: '/api/t2s',
      method: 'POST',
      data: JSON.stringify({text: vm.text}),
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
}
