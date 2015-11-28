Meteor.subscribe('notesList');

Template.notesList.helpers({
	'notes' : function(){
		var results = Notes.find({}, { 
			sort: {
				created : 1
			}
		});
		return results;
	},
});

Template.noteAdd.events({
	"submit form" : function(e){
		e.preventDefault();
		
		Meteor.call('noteAdd', {
			'label' : e.target.label.value,
			'department' : e.target.department.value,
			'description' : e.target.description.value
		});
		$(e.target).clear();
		console.log("savings note!");
	}
});

Template.notesItem.helpers({
		'formatDate' : function(date, defautReturn) {
		if(typeof date.getMonth === 'function'){
				return (date.getYear()+1900) + "-" + date.getMonth() + "-" + date.getDay();
		} else {
			return defautReturn;//intentially empty
		}
	}
});