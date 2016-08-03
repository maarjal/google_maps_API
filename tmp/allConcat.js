var apiKey = require('./../.env').apiKey;
var CustomMap = require('./../js/map.js').mapModule;


$(document).ready(function() {
  var epicodusMap = new CustomMap();
  var estoniaMap = new CustomMap();
  $('.maarjaNow').hide();
  $('#maarjaNow').click(function() {
    epicodusMap.locateUser();
  });
  $('#maarjaFrom').click(function() {
    estoniaMap.locateEstonia();
  });
});
