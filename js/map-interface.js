var apiKey = require('./../.env').apiKey;
var CustomMap = require('./../js/map.js').mapModule;

$(document).ready(function() {
  var epicodusMap = new CustomMap();
  $('.maarjaNow').hide();
  $('#maarjaNow').click(function() {
    epicodusMap.locateUser();
  });
  var estoniaMap = new CustomMap();
  $('#maarjaFrom').click(function() {
    estoniaMap.locateEstonia();
  });
  var map = new CustomMap();
  $('#maarjaSindi').click(function() {
    map.locateSindi();
  });
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
  console.log(city);
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The temperature in " + city + " is: " + response.main.temp + " degrees");}).fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
    });
  });

  var bridgesMap = new CustomMap();
  $('#maarjaBridges').click(function() {
    bridgesMap.locateBridges();
  });
  $('.travel').submit(function(event) {
    event.preventDefault();
    var travelMap = new CustomMap();
    var start = $('#start').val();
    var end = $('#end').val();
    console.log(start);
    console.log(end);
    travelMap.initMap();
  });
});
