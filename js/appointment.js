app.Appointment = function (spec) {

  // if apptDate is undefined or is just a space, throw 'appointment date is required'
  if (!spec.apptDate || spec.apptDate.trim() === '') {
    throw 'Appointment date is required';
  };

  var self = {
    apptTitle: spec.apptTitle,
    apptDate: spec.apptDate,
    apptTime: spec.apptTime,
    apptStreet: spec.apptStreet,
    apptCityState: spec.apptCityState
    
  };

  return self;
};
