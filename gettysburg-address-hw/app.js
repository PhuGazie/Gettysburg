$(document).ready(function(){

  $("#container").hide();
  $("#container").fadeIn(1000);

  $(document).on("mouseenter", "p", function(){
    $(this).css("background-color", "yellow")
  });

  $(document).on("mouseleave", "p", function(){
    $(this).css("background-color", "white")
  });

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
    $(".speech").addClass("font-large");
  });

  $(document).on("click", "#switcher-small", function(){
    $(".speech").addClass("font-small");
  });



});
