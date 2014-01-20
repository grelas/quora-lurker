$(function(){
  $window = $(window);
  $body   = $('body');
  
  $body.addClass('lurker-extension-show');

  var hideUnanswered = function(){
    $('.inline_answer').parents('.pagedlist_item').hide();
  };

  $window.scroll( $.throttle( 250, hideUnanswered ) );

  hideUnanswered();
});