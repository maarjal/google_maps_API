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
  var bridgesMap = new CustomMap();
  $('#maarjaBridges').click(function() {
    bridgesMap.locateBridges();
  })
});
