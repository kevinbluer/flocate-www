'use strict';

angular.module('flocateApp')
  .controller('ViewByCountryCtrl', function ($scope, $http, $location, $stateParams, moment, Auth) {

  	$scope.countryName = "Loading...";

  	// var user = Auth.getCurrentUser();
    // $scope.currentUser = user;

  	// TODO - include the trips that span the country too (e.g. backbacking through China with Stokesy)

  	// lookup based on country code
  	$scope.mapOptions = {
      center: new google.maps.LatLng(25, 0.1),
      zoom: 2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

	var query = new Parse.Query("Countries");
	query.equalTo("CountryCode3", $stateParams.countryCode);
	query.first({
	  success: function(country) {

	  	// country metadata
	  	$scope.countryName = country.get("CountryName");
		$scope.myMap.setCenter(new google.maps.LatLng(country.get("CountryCenterPoint").latitude, country.get("CountryCenterPoint").longitude));
		$scope.myMap.setZoom(country.get("ZoomLevel"));

		var Checkin = Parse.Object.extend("Checkin");
		var query = new Parse.Query(Checkin);

		query.equalTo("User", Parse.User.current());
		query.equalTo("CountryCode3", $stateParams.countryCode);
		query.ascending("RecordedAt");

		// get the checkins
		query.find({
		  success: function(checkins) {

		  	angular.forEach(checkins, function(value, key) {

		  		// establish the from date
		  		$scope.fromDate = moment(checkins[0].get("RecordedAt")).format("MMM Do YYYY");
				$scope.fromNow = moment(checkins[0].get("RecordedAt")).fromNow();

				// establish the to date
				if (checkins.length > 1) {
					var days = checkins.length - 1;
					$scope.toDate = moment(checkins[days].get("RecordedAt")).format("MMM Do YYYY");
					$scope.toNow = moment(checkins[days].get("RecordedAt")).fromNow();
				}

		  		// create a new marker
			    var marker = new google.maps.Marker({
			        map : $scope.myMap,
			        position : new google.maps.LatLng(value.get("Location").latitude, value.get("Location").longitude)
			    });

			    // build the market content
			    var contentString = '<div id="content">'+
			      '<div id="siteNotice">'+
			      '</div>'+
			      '<h3 id="firstHeading" class="firstHeading">' + value.get("Doing") + '</h3>'+
			      '<p>' + value.get("Note") + '</p>'+
			      '<div id="bodyContent">'+
			      '<p><b>' + moment(value.get("RecordedAt")).fromNow() + '</b>'+
			      '<a class="btn btn-default" style="width: 100%" href="/user/' + Parse.User.current().get("username") + '/' + value.id + '">'+
			      'View Pin</a>'+
			      '</div>'+
			      '</div>';

			    // create a new infowindow and add the content
			    var infowindow = new google.maps.InfoWindow({
				    content: contentString
				});

			    // add the click event
			    google.maps.event.addListener(marker, 'click', function() {
			    	infowindow.open($scope.myMap, marker);
				});

			    // add the marker
			    $scope.newMarker = marker;

			});

		  },
		  error: function(error) {
		    console.log(error);
		  }
		});

	  },
	  error: function(error) {
	    console.log(error);
	  }
	});

  });
