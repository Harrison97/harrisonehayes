/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

$(document).ready(function(){
// $(function()){
  console.log("JavaScript running...");
  // $('#myNav').fadeOut(0);
  $("#background-img").animate({opacity: 1}, 2*1000);
  $(this).scroll(function(){
    console.log($(this).scrollTop());
    if($(this).scrollTop() === 0){
      $('#myNav').fadeOut();
      // $('.body').fadeOut();
    } else{
      $('#myNav').fadeIn();
      // $('.body').fadeIn();
    }
  });
  // $("body").parallax()
  console.log("JavaScript ended...");
});


  