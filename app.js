$(document).ready(function(){

  $(document).on("click", "#fade", function() {
    $("#animated-div").fadeOut(5000, function(){
      $("#animated-div").fadeIn(2000, function() {
          alert("animation done!");
      });
    });
  });

  $(document).on("click", "#slide", function(){
    // $("#animated-div").slideToggle(1000, function(){
    //   alert("hey!");
    // });

    var isVisible = $("#animated-div").is(":visible");
    //same thing as saying if (isVisible === true)
    if (isVisible) {
      $("#animated-div").slideUp(1000);
    } else {
      $("#animated-div").slideDown(200);
    }
  });


  $(document).on("click", "#custom", function(){
      $("#animated-div").animate({
        "margin-left":"+=200px",
        "margin-top":"+=200px"
      }, 1000, function (){
        alert("done!");
      });
  });



});
