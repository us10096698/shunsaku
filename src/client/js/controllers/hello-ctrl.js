'use strict';

angular.module('shunsaku')
    .controller('HelloController', HelloController);

HelloController.$inject = ['$http'];

function HelloController($http) {
  var vm = this;
  vm.tagline = 'EMPTY';

  vm.setTagline = function(message) {
    vm.tagline = message;
  };

  vm.process = function(message) {
    var config = {'params': {'message': message}};
    $http.get('/api/hello/say', config)
      .then(function callback(res) {
        vm.setTagline(res.data);
      });
  };
}
