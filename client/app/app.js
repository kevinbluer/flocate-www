'use strict';

angular.module('flocateApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ui.map',
  'angularMoment'
])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider
    .otherwise('/');

  $locationProvider.html5Mode(true);
})
.run(function($rootScope) {
  // you can inject any instance here
});