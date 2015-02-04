app.showEditView = function (appt) {
  var editViewHtml = $('#edit-view-template').html();
  var compiledTemplate = _.template(editViewHtml, { variable: 'm' });

  $('.app-container').html(compiledTemplate(appt));

  $('.add-appt').click(app.showEditView);

  $('.appointment-form').submit(function () {
    var appt = getAppointmentFromForm();

    app.appointments.add(appt);

    app.showListView();

    return false;
  });
};
