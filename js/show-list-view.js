app.showListView = function () {
  var listViewHtml = $('#page1').html();

  $('.app-container').html(listViewHtml);

  $('.add-new').click(app.showEditView);

  $('.appt-item').click(function () {
    var item = $(this);
    var appointmentId = item.data('apptid');
    var appt = app.apptStore.getById(appointmentId);

    app.showEditView(appt);
  });
};
