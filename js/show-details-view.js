app.showDetailsView = function (appt) {
  var detailsViewHtml = $('#detailsView').html();


  // template for appointment objects
  // var appts = app.appointments.query(appt);
  var detailsTemplate = _.template(detailsViewHtml, {variable: 'm'});

  $('.app-container').html(detailsTemplate(appt));

  // $('.app-container').html(template ({
  //   appts:appts
  // }));

  $('.edit-button').click(app.showEditView);

  $('.back-button').click(app.showListView);



  // var apptArr = app.appointments.query();





  // $('.app-container').html(detailsViewHtml);
  //
  // $('.edit-button').click(app.showEditView);
  //
  // $('.back-button').click(app.showListView);
  //
  // var apptArr = app.appointments.query();

  // for (var i = 0; i < apptArr.length; ++i) {
  //   $('.app-container').append($('.appt-item-list').html());
  //   // $('.appt-item-list').last().data(apptArr[i]);
  //   $('.appt-date').getbyID().text(apptArr[i].apptTitle);
  //   $('.appt-time').getbyID().text(apptArr[i].apptTime);
  //   $('.appt-title').getbyID().text(apptArr[i].apptTitle);
  //   $('.appt-street').getbyID().text(apptArr[i].apptStreet);
  //   $('.appt-citystate').getbyID().text(apptArr[i].apptCityState);
  app.loadCurrentTemp();

  };

  // $('.appointment-form').submit(function () {
  //
  //   app.createAppointment();
  //   app.showListView();
  //
  //   return false;
