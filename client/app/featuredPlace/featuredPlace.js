'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('featuredPlaceAogashima', {
        url: '/featured/aogashima',
        templateUrl: 'app/featuredPlace/featured-aogashima.html',
        controller: 'FeaturedPlaceAogashimaCtrl'
      });
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('featuredPlaceManaus', {
        url: '/featured/manaus',
        templateUrl: 'app/featuredPlace/featured-manaus.html',
        controller: 'FeaturedPlaceManausCtrl'
      });
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('featuredPlaceHonduras', {
        url: '/featured/honduras',
        templateUrl: 'app/featuredPlace/featured-honduras.html',
        controller: 'FeaturedPlaceHondurasCtrl'
      });
  });