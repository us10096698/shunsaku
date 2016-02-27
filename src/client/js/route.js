'use strict';

angular.module('myapp')
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
