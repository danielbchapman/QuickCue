//CLIENT SIDE JAVASCRIPT
// counter starts at 0
Session.setDefault('counter', 0);
//Events

Meteor.subscribe('cueList');

Template.cueControls.events({
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
	  $(event.target).find('[name="cueNumber"]').focus();
		console.log($(this) + "->" + event);
		console.log($(this).html());
		console.log(this);
		console.log(event.target);	
	}
});

Template.CueSheet.events({
	"submit .new-cue" : function(event){
	  event.preventDefault();
	  console.log("Adding Cue!")
	  var qNum = event.target.cueNumber.value;
	  var qLabel = event.target.cueLabel.value;
	  var qDesc = event.target.cueDescription.value;
	  var qPlace = event.target.cuePlacement.value;
		var qPage = event.target.cuePlacement.value;

	  console.log("cue number is " + qNum); 
	  if(!qNum){
	    return;
	  }

	  Meteor.call('addCue', {
	  	number : qNum,
	    label : qLabel,
	    description : qDesc,
	    placement : qPlace,
			page : qPage
	  });
	  
	  event.target.cueNumber.value = "";
	  event.target.cueLabel.value = "";
	  event.target.cueDescription.value = "";
	  event.target.cuePlacement.value = "";
		event.target.cuePage.value = "";

	  //Pull focus back to the number input
	  $(event).children('[name="cueNumber"]').focus();
	},
	//Toggle confirm on and off
	"click #no-confirm" : function(event){
		Session.set("NO_CONFIRM", !Session.get("NO_CONFIRM"));
		console.log("NO CONFRIM = " + Session.get("NO_CONFIRM"));
	}
});
//Helpers
Template.CueSheet.helpers({
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

Template.cueItem.events({

});

Template.cueItemInner.events({
	//Submit and save this row
	"submit .row" : function(event){
		event.preventDefault();
		console.log(event);	
	},
	"blur [name='cue-number']" : function(e){
		Meteor.call('updateCue', this._id, { number : e.target.value });	
	},
	"blur [name='cue-label']" : function(e){
		Meteor.call('updateCue', this._id, { label : e.target.value });
	},
	"blur [name='cue-description']" : function(e){
		Meteor.call('updateCue', this._id, { description : e.target.value });
	},
	"blur [name='cue-placement']" : function(e){
		Meteor.call('updateCue', this._id, { placement : e.target.value });
	},
	"blur [name='cue-page']" : function(e){
		Meteor.call('updateCue', this._id, { placement : e.target.value });
	},
	//Button functions
	"click .addNote": function(e){
		e.preventDefault();
	  $('#note-' + this._id).modal('show');
	},
	//Delete options
	"click .remove": function(e){
		e.preventDefault();
		Meteor.call('removeCue', this._id);
	},
	"click .restore": function(e){
		e.preventDefault();
	  Meteor.call('restoreCue', this._id);
	},
	"click .delete": function(e){
		e.preventDefault();
	  Meteor.call('deleteCue', this._id);
	}
});

Template.cueItemInner.helpers({
	confirmDeletes : function(){
		var result = Session.get("NO_CONFIRM") ? true : false;
		return result;
	}
});

