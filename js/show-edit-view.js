app.showEditView = function () {

  var editViewHtml = $('#editView').html();

  $('.app-container').html(editViewHtml);

  $('.add-appt').click(app.showEditView);

  $('.back-button').click(app.showListView);

  $('.appointment-form').submit(function (event) {

      var appt = app.Appointment({
        apptTitle: $('input[name=title]').val(),
        apptDate: $('input[name=date]').val(),
        apptTime: $('input[name=time]').val(),
        apptStreet: $('input[name=street]').val(),
        apptCityState: $('input[name=citystate]').val(),
      });

      console.log(appt);


      app.appointments.add(appt);
      app.appointments.save(appt);


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
