'use strict';

angular.module('shunsaku')
  .config(routeConfig);

function routeConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('t2s', {
      url: '/',
      templateUrl: '/views/t2s.html',
      controller: T2sController,
      controllerAs: 'vm'
    });
}
