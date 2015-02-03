app.AppointmentStore = function() {

  var collection = [];

  var self = {
    // exists: function(obj) {
    //   return collection.some(function (item) {
    //     return obj.equal(item);
    //   });
    // },

    add: function(appt) {
      collection.push(appt);
      return true;

      // if (!self.exists(obj)){
      //   collection.push(obj);
      //   return true;
      // }
      //
      // return false;
    },

    query: function () {
      return collection;
    },

    remove: function(appt) {
      collection = collection.filter(function(item) {
        return !appt.equal(item);
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
