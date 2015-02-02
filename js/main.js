$(function() {
  var page1Html = $('#page1').html();
  var page2Html = $('#page2').html();

  $('.app-container').html(page1Html);


  // $('.add-appt').click(function(){
  //   $('.app-container').html(page2Html);
  // });


  $('.app-container').on('click','.add-appt',function(){
    $('.app-container').html(page2Html);
  });



  $('.app-container').on('click','.back-button',function(){
    $('.page-2').html(page1Html);
  });


});
