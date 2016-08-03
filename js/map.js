
CustomMap = function() {
};

CustomMap.prototype.locateEstonia = function(){
  var map = new google.maps.Map(document.getElementById('estonia'), {
    center: {lat: 59.432, lng: 24.721},
    scrollwheel: false,
    zoom: 6,
    MapTypeId: google.maps.MapTypeId.ROADMAP
  });
};

// locate epicodus
CustomMap.prototype.locateUser = function() {

  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
  $('.maarjaNow').show();

function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 18,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };
  var mapObject = new google.maps.Map(document.getElementById("epicodus"), myOptions);
  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
}

function geolocationError(positionError) {
  alert(positionError);
}
};

CustomMap.prototype.locateSindi = function() {
  var sindi = {lat: 58.404021, lng: 24.651696};
  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('sindi-pano'), {
        position: sindi,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  map.setStreetView(panorama);
};

// search

function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map1'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length === 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

exports.mapModule = CustomMap;
