app.showDetailsView = function (appt) {
  var detailsViewHtml = $('#detailsView').html();
  var detailsTemplate = _.template(detailsViewHtml, {variable: 'm'});

  $('.app-container').html(detailsTemplate(appt));

  $('.edit-button').click(app.showEditView);

  $('.back-button').click(app.showListView);


  app.loadCurrentTemp();

};
