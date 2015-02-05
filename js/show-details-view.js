app.showDetailsView = function () {
  var detailsViewHtml = $('#detailsView').html();

  $('.app-container').html($(detailsViewHtml));

  $('.edit-button').click(app.showEditView);

  $('.back-button').click(app.showListView);



  // $('.appointment-form').submit(function () {
  //
  //   app.createAppointment();
  //   app.showListView();
  //
  //   return false;

};
