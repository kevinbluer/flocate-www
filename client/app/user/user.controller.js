'use strict';

angular.module('flocateApp')
  .controller('UserCtrl', function ($scope) {
    $scope.mapOptions = {
      center: new google.maps.LatLng(35.784, -78.670),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  });

function onGoogleReady() {
  	// angular.bootstrap(document.getElementById("map"), ['app.ui-map']);
}

// myAppModule.controller('MapCtrl', ['$scope', function ($scope) {
// 	console.log("here");
    
//   }]);