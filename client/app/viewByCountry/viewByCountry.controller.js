'use strict';

angular.module('flocateApp')
  .controller('ViewByCountryCtrl', function ($scope) {

  	// Note that the LatLng / Zoom should come from the country table

  	// TODO - make call to get the country
  	// TODO - cap the zoom level on view?
  	// TODO OR - consider dynamically changing the country name / etc (on the model of a master map)
  	// TODO - include the trips that span China too (e.g. backbacking through China with Stokesy)

    $scope.mapOptions = {
      center: new google.maps.LatLng(34.95799531086792, 103.447265625),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  });
