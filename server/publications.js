Meteor.startup(function () {
// code to run on server at startup
});

//Publications
Meteor.publish('cueList', function(){
	var userId = this.userId;
	var show = "DEFAULT"; //Replace with the session at some point

	return Cues.find({
		'owner': userId,
		'show' : show
	});
});

Meteor.publish('notesList', function(){
	var userId = this.userId;
	var show = "DEFAULT";
	
	return Notes.find({
		'owner' : userId,
		'show' : show
	});
});
