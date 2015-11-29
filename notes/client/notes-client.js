Meteor.subscribe('notesList');

Template.Notes.helpers({
	'showCompleted' : function(){
		return !!Session.get("NOTES_SHOW_COMPLETED");
	}
});

//Toggle here to update all sub-templates
Template.Notes.events({
		"click .toggleShow" : function(e){
		var current = Session.get("NOTES_SHOW_COMPLETED");
		Session.set("NOTES_SHOW_COMPLETED", !current);
		console.log("showing selected..." + current + " to " + !current);
	}
});
//HELPERS
Template.notesList.helpers({
	'notes' : function(){
		var showCompleted = Session.get("NOTES_SHOW_COMPLETED");
		
		var query = Notes.find({}, { 
			sort: {
				created : 1
			}
		});
		
		if(!showCompleted){
			var filter = [];
			var data = query.fetch();
			
			for(var x in data){
				if(!data[x]["completed"]){
					filter.push(data[x]);
				}
			}
			return filter;	
		} else {
			return query;
		}
	}
});

//EVENTS
Template.noteAdd.events({
	"submit form" : function(e){
		e.preventDefault();
		
		Meteor.call('noteAdd', {
			'label' : e.target.label.value,
			'department' : e.target.department.value,
			'description' : e.target.description.value
		});
		$(e.target).closest('form').find("input[type=text], textarea, input[type=password]").val("");
		console.log("savings note!");
	}
});

Template.notesItem.helpers({
		'formatDate' : function(date, defautReturn) {
			var days = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			];
			if(typeof date.getMonth === 'function'){
					return (days[date.getDay()] + " " + date.getYear()+1900) + "-" + date.getMonth() + "-" + date.getDate();
			} else {
				return defautReturn;//intentially empty
			}
		} 
});

Template.notesItem.events({
	"click .crud-d" : function(e){
		Meteor.call('noteDelete', this._id, function(e){
			if(e){
				alert(e.reason);
			}
		});
	},
	"click .complete" : function(e){
		console.log("calling copmleted");
		Meteor.call('noteChangeComplete', this._id, !this.completed, function(e){
			if(e){
				alert(e.reason);
			}
		});
	}
});

//Note toggling
Template.noteToggle.events({

});