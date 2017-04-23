$(function (){

// code between these lines!

// FLICKITY SLIDER
  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true
  });

// SMOOTH SCROLLING (CSS TRICKS)
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
// FORM SUBMIT 



});