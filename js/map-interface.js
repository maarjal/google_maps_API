var apiKey = require('./../.env').apiKey;
var Map = require('./../js/map.js').mapModule;


$( document ).ready(function() {
  $('.maarjaNow').hide();
  $('#maarjaNow').click(locateUser);
  $('#maarjaFrom').click(locateEstonia);
});

function locateUser() {

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
}

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

function locateEstonia() {
  var map = new google.maps.Map(document.getElementById('estonia'), {
    center: {lat: 59.432, lng: 24.721},
    scrollwheel: false,
    zoom: 6,
    MapTypeId: google.maps.MapTypeId.ROADMAP
  });
}
