(function($){
  $('#back-to-top').on('click', function() {
    $('body,html').animate({ scrollTop: 0 }, 500);
  })  
})(jQuery);