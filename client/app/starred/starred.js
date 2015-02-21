'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('starred', {
        url: '/:username/starred',
        templateUrl: 'app/starred/starred.html',
        controller: 'StarredCtrl'
      });
  });