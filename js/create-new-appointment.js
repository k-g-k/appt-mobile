app.createAppointment = function(){

  var appt = app.Appointment({
    apptTitle: $('input[name=title]').val(),
    apptDate: $('input[name=date]').val(),
    apptTime: $('input[name=time]').val(),
    apptStreet: $('input[name=street]').val(),
    apptCityState: $('input[name=citystate]').val(),
    id: Date.now()
  });

  app.appointments.add(app.Appointment(appt));

};
