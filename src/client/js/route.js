'use strict';

angular.module('shunsaku')
  .config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('hello', {
      url: '/',
      templateUrl: '/views/hello.html',
      controller: HelloController,
      controllerAs: 'vm'
    });
}
