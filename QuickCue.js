if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    cues: [
      { number: "1", 
        label: "Test Label", 
        description: "Test Description", 
        placement: "Test Placement"},
      { number: "2", 
        label: "Test Label", 
        description: "Test Description", 
        placement: "Test Placement"},
      { number: "2", 
        label: "Test Label", 
        description: "Test Description", 
        placement: "Test Placement"},
      { number: "2", 
        label: "Test Label", 
        description: "Test Description", 
        placement: "Test Placement"}
    ]
  });
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
