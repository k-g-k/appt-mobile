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



    load: function () {
      appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    },

    save: function () {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    },

    remove: function(appt) {
      appointments = appointments.filter(function(item) {
        return item.uniqueId !== appt.uniqueId;
      });
      // localStorage.removeItem('appointments', JSON.stringify(appointments));
    },

    getById: function(appointmentId) {
      for (var i = 0; i < appointments.length; ++i) {
        var thisAppointmentId = appointments[i].uniqueId;
        console.log(thisAppointmentId);

        if (thisAppointmentId === appointmentId) {
          return appointments[i];
          console.log(i);
        }
      };
    }
  };


  return self;

};
