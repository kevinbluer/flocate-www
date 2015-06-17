'use strict';

angular.module('flocateApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/home/main.html',
        controller: 'MainCtrl'
      });
  })
  
  .config(function ($stateProvider) {
    $stateProvider
      .state('maps', {
        url: '/maps',
        templateUrl: 'app/home/maps.html',
        controller: 'AboutCtrl'
      });
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('featured', {
        url: '/featured',
        templateUrl: 'app/home/featured.html',
        controller: 'FeaturedCtrl'
      });
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('featuredPlaceAogashima', {
        url: '/featured/aogashima',
        templateUrl: 'app/home/featured-aogashima.html',
        controller: 'FeaturedPlaceAogashimaCtrl'
      });
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('featuredPlaceManaus', {
        url: '/featured/manaus',
        templateUrl: 'app/home/featured-manaus.html',
        controller: 'FeaturedPlaceManausCtrl'
      });
  })

  .config(function ($stateProvider) {
    $stateProvider
      .state('featuredPlaceHonduras', {
        url: '/featured/honduras',
        templateUrl: 'app/home/featured-honduras.html',
        controller: 'FeaturedPlaceHondurasCtrl'
      });
  });