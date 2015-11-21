//This file is the collection of methods used by the cue portion of the application
Meteor.methods({
	'addCue' : function(cue){
		//FIXME Add validation
		var userId = QuickCue.Auth.validUser();

		if(!cue){
			throw "Invalid cue, the cue itself was null or empty.";
		}

		if(!cue.number){
			throw "Invalid cue, the cue number " + cue.number + " does not exist.";
		}

		var showId = "DEFAULT";//;Session.get("SHOW") || "default";
		var data = {
			number : cue.number,
    		label : cue.label,
    		description : cue.description,
    		placement : cue.placement,
    		owner: userId,
    		show: showId
		};

		Cues.insert(data);
		console.log(data);

	},
	'changeShow' : function(name){
		return false;
	},
	'removeCue' : function(cueId){
		var user = QuickCue.Auth.validUser();
		Cues.update({
			_id: cueId,
			owner: user
		}, {
			$set: { remove: true }
		});
		console.log("Removing cue (setting remove to true)" + cueId + " for owner " + user);
	},
	'restoreCue' : function(cueId){
		var user = QuickCue.Auth.validUser();
		Cues.update({
			_id: cueId,
			owner: user
		}, {
			$set: { remove: false }
		});
	},
	'deleteCue' : function(cueId){
		var user = QuickCue.Auth.validUser();
		Cues.remove({
			_id: cueId,
			owner: user
		});
	}
});