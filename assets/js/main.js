// setTimeout(function(){
//     $('.loadingio-spinner-double-ring-6858fymfn34').fadeOut();
// }, 1000);

// Wow.js
new WOW().init();

// Preloader by me
$(window).on('load', function() {
    if ($('.loadingio-spinner-double-ring-6858fymfn34').length) {
      $('.loadingio-spinner-double-ring-6858fymfn34').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
});
// Back to top button
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});

$(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 550);
});



