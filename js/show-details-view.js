app.showDetailsView = function (appt) {
  var detailsViewHtml = $('#detailsView').html();

  $('.app-container').html(detailsViewHtml);

  $('.edit-button').click(app.showEditView);

  $('.back-button').click(app.showListView);

  var apptArr = app.appointments.query();

  // for (var i = 0; i < apptArr.length; ++i) {
  //   $('.app-container').append($('.appt-item-list').html());
  //   // $('.appt-item-list').last().data(apptArr[i]);
  //   $('.appt-date').getbyID().text(apptArr[i].apptTitle);
  //   $('.appt-time').getbyID().text(apptArr[i].apptTime);
  //   $('.appt-title').getbyID().text(apptArr[i].apptTitle);
  //   $('.appt-street').getbyID().text(apptArr[i].apptStreet);
  //   $('.appt-citystate').getbyID().text(apptArr[i].apptCityState);

  };

  // $('.appointment-form').submit(function () {
  //
  //   app.createAppointment();
  //   app.showListView();
  //
  //   return false;
