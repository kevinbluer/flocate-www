'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('starred', {
        url: '/starred',
        templateUrl: 'app/starred/starred.html',
        controller: 'StarredCtrl'
      });
  });