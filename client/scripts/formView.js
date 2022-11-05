// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
   event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var message = {
<<<<<<< HEAD
      username: App.username,
      text: $('#message')[0].value,
      roomname: Rooms.currentRoom
    };
    Parse.create(message, () => {
      $('#chats').html('');
      Parse.readAll((data) => {
        Messages.loadMessages(data);
        MessagesView.render();

        Rooms.loadRooms(data);
        RoomsView.render();
      });
    });
    // Parse.create()
=======
      username: '',
      text: $('#message')[0].value,
      roomname: "Breakout Room 12"
    };
    Parse.create(message, () => {});
>>>>>>> 13bbb7eadef504c7db16c012f26243eaddeef6cf
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};