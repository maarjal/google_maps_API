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
  // var bridgeMap = new CustomMap();
  // $('.bridge')submit(function(event) {
  //   event.preventDefault();
  //   var bridge = $('#maarjaBridge').val();
  //   $('#maarjaBridge').val("");
  //   var location = bridgeMap.getBridge(bridge);
  // });
});
