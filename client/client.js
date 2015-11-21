//CLIENT SIDE JAVASCRIPT
// counter starts at 0
Session.setDefault('counter', 0);
//Events

Meteor.subscribe('cueList');

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

	  Meteor.call('addCue', {
	  	number : qNum,
	    label : qLabel,
	    description : qDesc,
	    placement : qPlace
	  });
	  
	  event.target.cueNumber.value = "";
	  event.target.cueLabel.value = "";
	  event.target.cueDescription.value = "";
	  event.target.cuePlacement.value = "";

	  //Pull focus back to the number input
	  $('[name="cueNumber"]').focus();
	},
	//Toggle confirm on and off
	"click #no-confirm" : function(event){
		Session.set("NO_CONFIRM", !Session.get("NO_CONFIRM"));
	}
});
//Helpers
Template.body.helpers({
	cueCount : function(){
	  return Cues.find({}).count() || '0';
	},
	removeCue : function(id){

	},
	cues: function() {
		var results = Cues.find({}, {sort: { number : 1 }});
		//FIXME --add sorting here that makes sense
		return results;
	},
	noConfirm : function(){
		var result = Session.get("NO_CONFIRM") ? "checked" : false;
		return result;
	}
	});

Template.cue.events({
	//Notes
	"click .addNote": function(){
	  $('#note-' + this._id).modal('show');
	},
	//Delete options
	"click .remove": function(){
		Meteor.call('removeCue', this._id);
	},
	"click .restore": function(){
	  	Meteor.call('restoreCue', this._id);
	},
	"click .delete": function(){
	  Meteor.call('deleteCue', this._id);
	}
});

Template.cue.helpers({
	confirmDeletes : function(){
		var result = Session.get("NO_CONFIRM") ? true : false;
		return result;
	}
});

