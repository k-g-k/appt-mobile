app.showEditView = function (appt) {
  // var editViewHtml = $('#editView').html();
  // var compiledTemplate = _.template(editViewHtml, { variable: 'm' });
  //
  // $('.app-container').html(compiledTemplate(appt));

  $('.app-container').html($('#editView').html());

  $('.add-appt').click(app.showEditView);

  $('.appointment-form').submit(function () {

    app.createAppointment();
    app.showListView();

    return false;
  });
};
