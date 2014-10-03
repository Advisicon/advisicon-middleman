$(function() {
  
  // autoplay background videos when the browser is 870px wide or more
  if ($(window).width() >= 870) {
    $('.bgvid video').attr('autoplay', true);
  }

  // if the browser window is resized to 870px wide or more, autoplay 
  // background videos
  $(window).resize(function() {
    if ($(window).width() >= 870) {
      $('.bgvid video').attr('autoplay', true);
    }
  });
});
