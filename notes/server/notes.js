//Add notes methods here 
Meteor.methods({
	'noteAdd' : function(note){
		var userId = QuickCue.Auth.validUser();
		
		if(!userId) {
			throw "Invalid user!";
		}
		
		if(!note){
			throw "Invalid Note! The note is undefined or empty";
		}
		
		var showId = "DEFAULT";
		
		var data = {
			label: note.label,
			department: note.department,
			description: note.description,
			completed : false,
			created : new Date(),
			owner : userId + "",
			show : showId + ""
		}
		
		Notes.insert(data);
		console.log("Inserting Note:");
		console.log(data);
		console.log("USER-ID: " + data["owner"] + " | " + userId);
	},
	'noteUpdate' : function(mongoId, setObj){
		var userId = QuickCue.Auth.validUser();
		
		if(!mongoId){
			throw "Can not update a note without a valid reference";
		}
		
		console.log("[WARNING] this input should be sanitized.");
		Notes.update({
			_id: mongoId,
			owner: userId
		}, {
			$set : setObj
		});
	},
	'noteChangeComplete' : function(mongoId, complete){
		var user = QuickCue.Auth.validUser();
		
		if(!mongoId){
			throw "Can not update a note without a valid reference";
		}

		Notes.update({
			_id: mongoId,
			owner: user
		}, {
			$set : {
				completed: complete		
			}
		});
	},
	'noteDelete' : function(mongoId){
		var user = QuickCue.Auth.validUser();
		
		if(!mongoId){
			throw "Can not update a note without a valid reference";
		}
		
		console.log("removing " + mongoId);
		Notes.remove({
			_id: mongoId,
			owner: user
		});
	}
});

