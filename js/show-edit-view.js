app.showEditView = function () {

  var editViewHtml = $('#editView').html();

  $('.app-container').html(editViewHtml);

  $('.add-appt').click(app.showEditView);

  $('.back-button').click(app.showListView);

  $('.appointment-form').submit(function (event) {

    // app.createAppointment = function() {


      var appt = app.Appointment({
        apptTitle: $('input[name=title]').val(),
        apptDate: $('input[name=date]').val(),
        apptTime: $('input[name=time]').val(),
        apptStreet: $('input[name=street]').val(),
        apptCityState: $('input[name=citystate]').val(),
        id: Date.now()
      });

      console.log(appt);

      app.appointments.add(appt);





      // $('.appt-item').append(appt);


    // };

    // app.createAppointment();
    event.preventDefault();
    app.showListView();
    alert("fire");


    // return false;
  });
};



// var compiledTemplate = _.template(editViewHtml, { variable: 'm' });
//
// $('.app-container').html(compiledTemplate(appt));
