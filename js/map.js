
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
  var map = new google.maps.Map(document.getElementById('sindi'), {
    center: sindi,
    zoom: 14
  });
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

exports.mapModule = CustomMap;
