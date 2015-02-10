app.showModal = function(specificAppt){
  var modal = $('#modal').html();

  app.showListView();
  $('.app-container').append(modal);

  $('.confirm-remove').click(function(e){
    var item = specificAppt;
    var uniqueId = item.data('id');
    var appt = app.appointments.getById(uniqueId);

    e.stopPropagation();
    app.appointments.remove(appt);
    app.appointments.save(appt);
    item.remove();

    app.showListView();
  });

  $('.close-modal').click(function(){
    app.showListView();
  });
};
