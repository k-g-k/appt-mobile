app.showEditView = function () {

  var editViewHtml = $('#editView').html();

  $('.app-container').html($(editViewHtml));

  $('.add-appt').click(app.showEditView);

  $('.back-button').click(app.showListView);

  $('.appointment-form').submit(function () {

    app.createAppointment();
    app.showListView();

    return false;
  });
};



// var compiledTemplate = _.template(editViewHtml, { variable: 'm' });
//
// $('.app-container').html(compiledTemplate(appt));
