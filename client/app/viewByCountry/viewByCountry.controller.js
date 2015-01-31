'use strict';

angular.module('flocateApp')
  .controller('ViewByCountryCtrl', function ($scope, $http) {

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


	$http.get('/api/checkin/checkinsByCountry', {}).
	success(function(data, status, headers, config) {

	  	angular.forEach(data, function(value, key) {

		    var marker = new google.maps.Marker({
		        map : $scope.myMap,
		        position : new google.maps.LatLng(value["Location"]["latitude"], value["Location"]["longitude"])
		    });

	    	google.maps.event.addListener(marker, 'click', function() {
			    
			    $("#pinTitle").html(value["Doing"]);
			    $("#pinDesc").html(value["Note"]);
			    $scope.checkinId = value.objectId;
			    $scope.pinDate = value["RecordedAt"]["iso"];
			});

		    $scope.newMarker = marker;

		});

	}).
	error(function(data, status, headers, config) {

		// TODO handle the error scenarios

	});

  });
