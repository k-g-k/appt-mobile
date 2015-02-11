app.showEditView = function (appt) {

  var editViewHtml = $('#editView').html();
  var editTemplate = _.template(editViewHtml, {variable: 'm'});

  $('.app-container').html(editTemplate(appt));

  $('.add-appt').click(app.showEditView);

  $('.back-button').click(app.showListView);

  $('.appointment-form').submit(function (event) {

    if (appt) {
      appt.apptTitle = $('input[name=title]').val();
      appt.apptDate = $('input[name=date]').val();
      appt.apptTime = $('input[name=time]').val();
      appt.apptStreet = $('input[name=street]').val();
      appt.apptCityState = $('input[name=citystate]').val();
    } else {
      appt = app.Appointment({
        apptTitle: $('input[name=title]').val(),
        apptDate: $('input[name=date]').val(),
        apptTime: $('input[name=time]').val(),
        apptStreet: $('input[name=street]').val(),
        apptCityState: $('input[name=citystate]').val()
      });
      app.appointments.add(appt);
    };
    app.appointments.save();
    event.preventDefault();
    app.showListView();
  });
};

//Below is commented out code trying to figure out pulling dates
// $(function() {
//   $( "#datepicker" ).datepicker();
//   $( "#format" ).change(function() {
//     $( "#datepicker" ).datepicker( "option", "dateFormat", $( this ).val() );
//   });
// });

// $( 'input[name=date]' ).datepicker({
//   showOn: "button",
//   buttonImage: "images/calendar.gif",
//   buttonImageOnly: true,
//   buttonText: "Select date"
// }).val(),



// $('input[name=date]').DatePicker({
//   flat: true,
//   date: '2008-07-31',
//   current: '2008-07-31',
//   calendars: 1,
//   starts: 1
// }),

// $(function() {
//   $( "#datepicker" ).datepicker();
// });

// $('.appt-item').append(appt);


// };

//
//
//
//
// function createNewAppt() {
//   var appt = app.Appointment({
//     apptTitle: $('input[name=title]').val(),
//     apptDate: $('input[name=date]').val(),
//     apptTime: $('input[name=time]').val(),
//     apptStreet: $('input[name=street]').val(),
//     apptCityState: $('input[name=citystate]').val()
//   });
//   app.appointments.add(appt);
// };
//
// function editAppt(appt) {
//   appt.apptTitle = $('input[name=title]').val();
//   appt.apptDate: $('input[name=date]').val(),
//   appt.apptTime: $('input[name=time]').val(),
//   appt.apptStreet: $('input[name=street]').val(),
//   appt.apptCityState: $('input[name=citystate]').val()
//
// };
//
// function editOrAdd(){
//   if (appt) {
//     editAppt(appt);
//   } else {
//     createNewAppt();
//   };
//   app.appointments.save(appt);
// }
//
//
// editOrAdd();
// event.preventDefault();
// app.showListView();
//
// });
// };
