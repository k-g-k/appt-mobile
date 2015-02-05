// Naming the function that shows the list view page
// (which is also the default page)
app.showListView = function () {

      //variable that selects the listView script in the html
  var listViewHtml = $('#listView').html();

      // placing listViewHtml (ie #listView)
      // into the empty container (ie .app-container)
  $('.app-container').html(listViewHtml);

      // assigning the add-appt button to the showEditView function
      // that displays the editView screen
  $('.add-appt').click(app.showEditView);

      //dealing with IDs
  $('.appt-item').click(function () {
    var item = $(this);
    var appointmentId = item.data('apptid');
    var appt = app.appointmentStore.getById(appointmentId);

    app.showEditView(appt);
  });
};
