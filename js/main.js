// $(function() {
//   app.appointments = app.AppointmentStore();

  // This is the default view, which is set up and initialized
  // in show-list-view.js
//   app.showListView();
// });
// value="<%- m.title %>" value="<%- m.date %>" 

$(function() {
  var page1Html = $('#page1').html();
  var page2Html = $('#page2').html();
  var page3Html = $('#page3').html();

  // Default container for page
  $('.app-container').html(page1Html);

  // If you click on plus button (.add-appt), you go to Page 2
  $('.app-container').on('click','.add-appt',function(){
    $('.app-container').html(page2Html);
  });

  // If you click on an appointment ('appt-details' class), you're sent to Page 3
  $('.app-container').on('click', '.appt-preview', function(){
    $('.app-container').html(page3Html);
  })

  // If you click on back button of Page 2, you go back to Page 1.
  $('.app-container').on('click','.back-button',function(){
    $('.page-2').html(page1Html);
  });

  // If you click on back button of Page 3, you go back to Page 1.
  $('.app-container').on('click','.back-button',function(){
    $('.page-3').html(page1Html);
  });

});














// $(function() {
//   var page1Html = $('#page1').html();
//   var page2Html = $('#page2').html();
//
//   $('.app-container').html(page1Html);
//
//
//   $('.app-container').on('click','.add-appt',function(){
//     $('.app-container').html(page2Html);
//   });
//
//
//
//   $('.app-container').on('click','.back-button',function(){
//     $('.page-2').html(page1Html);
//   });
//
//
// });
