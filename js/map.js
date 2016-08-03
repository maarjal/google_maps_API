
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

// stree view of home street
// function initPano() {
//   var panorama = new google.maps.StreetViewPanorama(
//    document.getElementById('map'), {
//      pano: 'reception',
//      visible: true,
//      panoProvider: getCustomPanorama
//  });
// }
//
// function getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
//  return 'https://developers.google.com/maps/documentation/javascript/examples/full/images/panoReception1024-0.jpg';
// }
//
// function getCustomPanorama(pano, zoom, tileX, tileY) {
//  if (pano === 'reception') {
//    return {
//      location: {
//        pano: 'reception',
//        description: 'Google Sydney - Reception'
//      },
//      links: [],
//      copyright: 'Imagery (c) 2010 Google',
//      tiles: {
//        tileSize: new google.maps.Size(1024, 512),
//        worldSize: new google.maps.Size(1024, 512),
//        centerHeading: 105,
//        getTileUrl: getCustomPanoramaTileUrl
//      }
//    };
//  }
// }


exports.mapModule = CustomMap;
