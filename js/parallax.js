$(document).ready(function() {
var movementStrength = 10;
var movementStrength1 = 15;
var movementStrength2 = 30;
var movementStrength3= 60;
var height0 = movementStrength / $(window).height();
var width0 = movementStrength / $(window).width();
var height1 = movementStrength1 / $(window).height();
var width1 = movementStrength1 / $(window).width();
var height2 = movementStrength2 / $(window).height();
var width2 = movementStrength2 / $(window).width();
var height3 = movementStrength3 / $(window).height();
var width3 = movementStrength3 / $(window).width();
$(window).mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width0 * pageX * -1 - 25;
          var newvalueY = height0 * pageY * -1 - 50;
          $('#layer0').css("background-position", newvalueX+"px     "+newvalueY+"px");
          pageX = e.pageX - ($(window).width() / 2);
          pageY = e.pageY - ($(window).height() / 2);
          newvalueX = width1 * pageX * -1 - 25;
          newvalueY = height1 * pageY * -1 - 50;
          $('#layer1').css("background-position", newvalueX+"px     "+newvalueY+"px");
          pageX = e.pageX - ($(window).width() / 2);
          pageY = e.pageY - ($(window).height() / 2);
          newvalueX = width2 * pageX * -1 - 25;
          newvalueY = height2 * pageY * -1 - 50;
          $('#layer2').css("background-position", newvalueX+"px     "+newvalueY+"px");
          newvalueX = width3 * pageX * -1 - 25;
          newvalueY = height3 * pageY * -1 - 50;
          $('#layer3').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});