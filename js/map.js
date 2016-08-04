
CustomMap = function() {
};

// locate Estonia
CustomMap.prototype.locateEstonia = function(){
  var map = new google.maps.Map(document.getElementById('estonia'), {
    center: {lat: 59.432, lng: 24.721},
    scrollwheel: false,
    zoom: 6,
    MapTypeId: google.maps.MapTypeId.ROADMAP
  });
};

// locate Epicodus
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

// Locate Sindi Maarja's Hometown

CustomMap.prototype.locateSindi = function() {
  var fenway = {lat: 58.404021, lng: 24.651696};
  var map = new google.maps.Map(document.getElementById('sindi-map'), {
     center: fenway,
     zoom: 14
   });
   var panorama = new google.maps.StreetViewPanorama(
       document.getElementById('sindi-pano'), {
         position: fenway,
         pov: {
           heading: 214,
           pitch: 5
         }
       });
   map.setStreetView(panorama);
};

// search for Portland Bridges

CustomMap.prototype.locateBridges = function () {
  var portland = new google.maps.LatLng(45.522743,-122.677572);

  map = new google.maps.Map(document.getElementById('bridges'), {
      center: portland,
      zoom: 14
    });

  var request = {
    location: portland,
    radius: '500',
    query: 'portland bridges'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      new google.maps.Marker({
        map: map,
        position: place.geometry.location,
      });
    }
  }
}

exports.mapModule = CustomMap;
