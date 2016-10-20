$(document).ready(function() {
  $('.slide2').show();
  $('.photographer-2').hide();

  $('#open-close').click(function(event) {
    event.preventDefault();
    $('photographer-2').slideToggle();
  });
});