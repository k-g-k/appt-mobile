app.showListView = function () {
  var listViewHtml = $('#listView').html();

  $('.app-container').html(listViewHtml);

  $('.add-appt').click(app.showEditView);

  $('.appt-item').click(function () {
    var item = $(this);
    var appointmentId = item.data('apptid');
    var appt = app.appointmentStore.getById(appointmentId);

    app.showEditView(appt);
  });
};
