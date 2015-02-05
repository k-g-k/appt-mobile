app.Appointment = function (spec) {

  return {
    apptTitle: spec.apptTitle,
    apptDate: spec.apptDate,
    apptTime: spec.apptTime,
    apptStreet: spec.apptStreet,
    apptCityState: spec.apptCityState,
    id: spec.id
  };
};


// if apptDate is undefined or is just a space, throw 'appointment date is required'
// if (!spec.apptDate || spec.apptDate.trim() === '') {
//   throw 'Appointment date is required';
// };
