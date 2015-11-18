Cues = new Mongo.Collection("cues");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  //Events
  Template.body.events({
    "submit .new-cue" : function(event){
      event.preventDefault();
      console.log("Adding Cue!")
      var qNum = event.target.cueNumber.value;
      var qLabel = event.target.cueLabel.value;
      var qDesc = event.target.cueDescription.value;
      var qPlace = event.target.cuePlacement.value;

      console.log("cue number is " + qNum); 
      if(!qNum){
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
    addCue: function(num){x
      Cues.insert({ number : num });
    },
    removeCue : function(id){

    },
    cues: function() {
      return Cues.find({},{ sort: {number : 1}});
    }
    // cues: [
    //   { number: "1", 
    //     label: "Test Label", 
    //     description: "Test Description", 
    //     placement: "Test Placement"},
    //   { number: "2", 
    //     label: "Test Label", 
    //     description: "Test Description", 
    //     placement: "Test Placement"},
    //   { number: "2", 
    //     label: "Test Label", 
    //     description: "Test Description", 
    //     placement: "Test Placement"},
    //   { number: "2", 
    //     label: "Test Label", 
    //     description: "Test Description", 
    //     placement: "Test Placement"}
    // ]
  });

  Template.cue.events({
    //Notes
    "click .addNote": function(){
      alert("This would add a note!");
    },
    //Delete options
    "click .remove": function(){
      Cues.update(this._id, {
        $set: { remove: true }
      });
      console.log("removing!");
    },
    "click .restore": function(){
      Cues.update(this._id, {
        $set: { remove: false } 
      });
      console.log("restoring!");
    },
    "click .delete": function(){
      Cues.remove(this._id);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
