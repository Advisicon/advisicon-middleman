$(function() {                                                          // load async

  // they have jquery loaded, hide the order form
  $('#order').addClass('collapse');

  $('.expand-form').click(function(e){
      e.preventDefault();
      $('#order').collapse('show');                                      // if they want to ship to a shipping destination, show shipping destination form
      $('html, body').animate({
        scrollTop: $("#order").offset().top
      }, 1000);
  });

});

