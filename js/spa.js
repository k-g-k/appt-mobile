$(function () {

  var page1Html = $('#page1').html();
  var page2Html = $('#page2').html();



  $('.spa-content').html(page1Html);
  // $('.spa-content').html('<div class="panel-1"></div>');


  $('.panel-1').click(function() {
    $('.spa-content').html(page2Html);
  // $('.panel-1').click(function() {
  //   $('.spa-content').html('<div class="panel-2"></div>');
  });


});
