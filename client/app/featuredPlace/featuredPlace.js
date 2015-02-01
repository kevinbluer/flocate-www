'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('featuredPlace', {
        url: '/featuredPlace',
        templateUrl: 'app/featuredPlace/featuredPlace.html',
        controller: 'FeaturedPlaceCtrl'
      });
  });