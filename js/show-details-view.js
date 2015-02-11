app.showDetailsView = function (appt) {
  var detailsViewHtml = $('#detailsView').html();
  var detailsTemplate = _.template(detailsViewHtml, {variable: 'm'});

  $('.app-container').html(detailsTemplate(appt));

  $('.edit-button').click(function() {
    app.showEditView(appt);
  });

  $('.back-button').click(app.showListView);

  app.loadCurrentTemp(appt.apptCityState);

};
