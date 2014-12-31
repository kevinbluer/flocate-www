'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewByCountry', {
        url: '/viewByCountry',
        templateUrl: 'app/viewByCountry/viewByCountry.html',
        controller: 'ViewByCountryCtrl'
      });
  });