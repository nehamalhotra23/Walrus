$(document).ready(function() {
  $(".clickable").click(function() {
    $("#fox-hidden").fadeToggle();
    $("#fox-showing").fadeToggle();
  });
});
