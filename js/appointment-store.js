//Constructing the function that stores the appointments
app.AppointmentStore = function() {

        //Collection of appointments (where the appointments are stored)
  var appointments = [];

  var self = {

        // Function that adds the appointment to the collection of appointments
    add: function(appt) {
      appointments.push(appt);
    },

        // Function that returns the current coollection of appointments
    query: function () {
      return appointments;
    },

        // SHOULD remove an appoint from the collection of appointments
    remove: function(appt) {
      appointments = appointments.filter(function(item) {
        return item.id !== appt.id;
      });
    }
  };

  return self;

};
