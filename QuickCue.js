var Cues = new Mongo.Collection("cues");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  //Events
  Template.body.events({
    "submit .new-cue" : function(event){
      event.preventDefault();

      var qNum = event.target.cueNumber.value;
      var qLabel = event.target.cueLabel.value;
      var qDesc = event.target.cueDescription.value;
      var qPlace = event.target.cuePlacement.value;

      console.log("cue number is " + num); 
      if(!num){
        return;
      }

      Cues.insert({ 
        number : qNum,
        label : qLabel,
        description : qDesc,
        placement : qPlace
      });

      event.target.cueNumber.value = "";
      event.target.cueLabel.value = "";
      event.target.cueDescription.value = "";
      event.target.cuePlacement.value = "";
    }
  });
  //Helpers
  Template.body.helpers({
    cueCount : function(){
      return -1;//Cues.count();
    },
    addCue: function(num){
      Cues.insert({ number : num });
    },
    removeCue : function(id){

    },
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
