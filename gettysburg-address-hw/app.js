$(document).ready(function(){

  $("#container").hide();
  $("#container").fadeIn(1000);

  $(document).on("mouseenter", "p", function(){
    $(this).css("background-color", "yellow");
  });
// also written $(p).on("mouseenter", function(){
//    $(this).css("background-color", "yellow")
});
  $(document).on("mouseleave", "p", function(){
    $(this).css("background-color", "white");
  });
  // also written $(p).on("mouseleave", function(){
  //    $(this).removeAttr("style")


  $(document).on("click", "h2", function(){
    $("h2").animate({
      "opacity":".25",
      "margin-left":"20px"},

      function (){
        $(".speech").animate({
          "opacity":".50"
      });
    });
  });

  $(document).on("click", "#switcher-large", function(){
    $(".speech").css("font-size", "2em");
  });

  $(document).on("click", "#switcher-small", function(){
    $(".speech").css("font-size", ".5em");
  });

  $(document).on("click", "#switcher-default", function(){
    $(".speech").css("font-size", "1em");
  });
