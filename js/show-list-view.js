// Naming the function that shows the list view page
// (which is also the default page)
app.showListView = function () {

      //variable that selects the listView script in the html
  var listViewHtml = $('#listView').html();
  // var indivApptHtml = $('#indivAppt').html();
  var appts = app.appointments.query();
  var template = _.template(listViewHtml, {variable: 'm'});




      // placing listViewHtml (ie #listView)
      // into the empty container (ie .app-container)
  $('.app-container').html(template ({
    appts:appts
  }));

      // assigning the add-appt button to the showEditView function
      // that displays the editView screen
  $('.add-button').click(app.showEditView);

  $('.appt-item').click(app.showDetailsView);

  // $('.app-container').append(indivApptHtml);

  //
  // var apptArr = app.appointments.query();

  // for (var i = 0; i < apptArr.length; ++i) {
  //   $('.app-container').append($('.appt-item-list').html());
  //   // $('.appt-item-list').last().data(apptArr[i]);
  //   $('.appt-date').last().text(apptArr[i].apptTitle);
  //   $('.appt-time').last().text(apptArr[i].apptTime);
  //   $('.appt-title').last().text(apptArr[i].apptTitle);
  //   $('.appt-street').last().text(apptArr[i].apptStreet);
  //   $('.appt-citystate').last().text(apptArr[i].apptCityState);

  // };

  // app.loadCurrentTemp();

};

  // $('.remove-button').click(function(){
  //   var theButton = $(this);
  //
  //   theButton.closest('li').remove();



  // });




  // function showListView(AppointmentStore) {
  //   var apptArr = AppointmentStore.query();
  //
  //   for (var i = 0; i < apptArr.length; ++i) {
  //     $('.app-container').append($('.appt-item').html());
  //     // $('.appt-item-list').last().data(apptArr[i]);
  //     $('.appt-date').last().text(apptArr[i].apptTitle);
  //     $('.appt-time').last().text(apptArr[i].apptTime);
  //     $('.appt-title').last().text(apptArr[i].apptTitle);
  //     $('.appt-street').last().text(apptArr[i].apptStreet);
  //     $('.appt-citystate').last().text(apptArr[i].apptCityState);

      // $('.delete').last().click(function (event) {
      //   event.stopPropagation();
      //   apptStore.remove($(event.target).closest('.appt-listing-container').data());
      //   $('.main-list-container').html('');
      //   populateMainScreen(apptStore);
      // })
  //   }
  // }



      //dealing with IDs
  // $('.appt-item').click(function () {
  //   var item = $(this);
  //   var appointmentId = item.data('apptid');
  //   var appt = app.appointmentStore.getById(appointmentId);
  //
  //   app.showEditView(appt);
  // });
// };
