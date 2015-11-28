//Add notes methods here 
Meteor.methods({
	'noteAdd' : function(note){
		var userId = QuickCue.Auth.validUser();
		
		if(!note){
			throw "Invalid Note! The note is undefined or empty";
		}
		
		var showId = "DEFAULT";
		
		var data = {
			label: note.label,
			department: note.department,
			description: note.description,
			completed : note.completed,
			created : new Date(),
			owner : userId,
			show : showId
		}
		
		Notes.insert(data);
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
	'noteDelete' : function(mongoId){
		var userId = QuickCue.Auth.validUser();
		
		if(!mongoId){
			throw "Can not update a note without a valid reference";
		}
		
		Notes.remote({
			_id: mongoId,
			owner: userId
		});
	}
});