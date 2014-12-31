'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('viewByCountry', {
        url: '/user/:username/country/:countryCode',
        templateUrl: 'app/viewByCountry/viewByCountry.html',
        controller: 'ViewByCountryCtrl'
      });
  });