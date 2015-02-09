app.showListView = function () {

  var listViewHtml = $('#listView').html();
  var detailsViewHtml = $('#detailsView').html();
  var appts = app.appointments.query();
  var template = _.template(listViewHtml, {variable: 'm'});

  app.appointments.load(appts);

  $('.app-container').html(template ({
    appts:appts}));

  $('.add-button').click(app.showEditView);

  $('.appt-item').click(function () {
    var item = $(this);
    var uniqueId = item.data('id');
    var appt = app.appointments.getById(uniqueId);
    app.showDetailsView(appt);
    console.log(uniqueId)
  });


};
