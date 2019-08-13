$(document).ready(function() {
  $(".clickable").click(function() {
    $("#p1").fadeToggle();
    $("#fox-hidden").fadeToggle();
    $("#fox-showing").fadeToggle();
  });
});

$(document).ready(function() {
   $(".pic2").click(function() {
    $("#baby-fox1").fadeToggle();
  $("#baby-fox2").fadeToggle();

});
});

$ (document).ready(function() {
  $("button#blueButton").click(function(){
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
})

$ (document).ready(function() {
  $("button#greyButton").click(function(){
    $("body").removeClass();
    $("body").addClass("grey-background");
  });
})
