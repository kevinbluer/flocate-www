'use strict';

angular.module('flocateApp')
  .controller('AddCtrl', function ($scope, $location, $rootScope, $http) {

    var lat = 51.50874245880332;
    var lng = -0.087890625;
    var zoom = 2;
    var currentMarker;
    var geocoder = new google.maps.Geocoder();
    $scope.user = $rootScope.user;
    $scope.what = '';
    $scope.where = '';
    $scope.lat = '';
    $scope.lng = '';
    $scope.countryShort = '';
    $scope.countryLong = '';

    if ($location.search().lat) {
      lat = parseFloat($location.search().lat);
    }

    if ($location.search().lng) {
      lng = parseFloat($location.search().lng);
    }

    if ($location.search().zoom) {
      zoom = parseInt($location.search().zoom);
    }

    $scope.mapOptions = {
      center: new google.maps.LatLng(lat, lng),
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.init = function() {

      if ($location.search().date) {
        $scope.dt = new Date($location.search().date);
      } else {
        $scope.dt = new Date();
      }
    }

    $scope.addMarker = function($event, $params) {

        // remove previous marker
        if (currentMarker) {
          currentMarker.setMap(null);
        }

        $scope.lat = $params[0].latLng.lat();
        $scope.lng = $params[0].latLng.lng();

        geocoder.geocode({'latLng': $params[0].latLng}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {

              // thanks @ http://stackoverflow.com/questions/6359995/get-city-from-geocoder-results
              var arrAddress = results[1].address_components;
              var itemRoute='';
              var itemLocality='';
              var itemCountry='';
              var itemCountryShort='';
              var itemPc='';
              var itemSnumber='';

              // iterate through address_component array
              $.each(arrAddress, function (i, address_component) {
                  console.log('address_component:'+i);

                  if (address_component.types[0] == "route"){
                      console.log(i+": route:"+address_component.long_name);
                      itemRoute = address_component.long_name;
                  }

                  if (address_component.types[0] == "locality"){
                      console.log("town:"+address_component.long_name);
                      itemLocality = address_component.long_name;
                  }

                  if (address_component.types[0] == "country"){ 
                      console.log("country:"+address_component.short_name); 
                      itemCountry = address_component.long_name;
                      $scope.countryLong = address_component.long_name;
                      $scope.countryShort = address_component.short_name;
                  }

                  if (address_component.types[0] == "postal_code_prefix"){ 
                      console.log("pc:"+address_component.long_name);  
                      itemPc = address_component.long_name;
                  }

                  if (address_component.types[0] == "street_number"){ 
                      console.log("street_number:"+address_component.long_name);  
                      itemSnumber = address_component.long_name;
                  }
                  //return false; // break the loop   
              });

              $scope.where = results[1].formatted_address;

              // map.setZoom(11);
              // marker = new google.maps.Marker({
              //     position: latlng,
              //     map: map
              // });
              // infowindow.setContent();

            } else {
              $scope.where = "";
            }
          } else {
            $scope.where = "";
          }
        });

        var marker = new google.maps.Marker({
            position : $params[0].latLng
        });

        marker.setMap($scope.myMap);

        currentMarker = marker;

        google.maps.event.addListener(marker, 'click', function() {
            // alert('yo');
        });
    };

	  $scope.add = function() {

      // TODO grab the entire location object?

		  $http.post('/api/checkin', {
          user: $scope.user, 
          what: $scope.what, 
          where: $scope.where, 
          lat: $scope.lat, 
          lng: $scope.lng, 
          countryShort: $scope.countryShort, 
          countryLong: $scope.countryLong, 
          dt: $scope.dt
        }).
    		success(function(data, status, headers, config) {

    			// redirect to place page
    			$location.path('/user/kevinbluer/' + data.objectId);

    		}).
    		error(function(data, status, headers, config) {
          
          console.log(data);

    			// TODO handle the error scenarios

    		});

	  }

});
