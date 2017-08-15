$(function (){
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.subscribe-button').on('submit', function(event){
    event.preventDefault();
    if ( $('#email').val() == '' ) {
          alert('Please enter a valid e-mail')
        } else {
          alert('Thanks for subscribing!');
        }        
  });
});