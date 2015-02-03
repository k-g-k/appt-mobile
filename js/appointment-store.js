app.AppointmentStore = function() {

  var collection = [];

  var self = {
    // exists: function(obj) {
    //   return collection.some(function (item) {
    //     return obj.equal(item);
    //   });
    // },

    add: function(appointment) {
      if (!self.exists(appointment)){
        collection.push(appointment);
        return true;
      }

      return false;
    },

    query: function () {
      return collection;
    },

    remove: function(obj) {
      collection = collection.filter(function(item){
        return !obj.equal(item);
      });
    }
  };

  return self;


  //TODO:  implement the appt store here
  // should have these properties
  // add(appointment)
  // removebyID(appointmentID)
  // query()
};
