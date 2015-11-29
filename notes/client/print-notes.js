
Template.PrintNotes.helpers({
	'noteForDepartment' : function(dept, complete){
		return Notes.find({	
				completed : complete, 
				department : dept
			}, { 
				sort: {
					department : 1,
					created: 1
			}
		});
	},
	'departments' : function(){
		//FIXME make this a dynamic service
		return ['Lighting', 'Scenery', 'Sound', 'Costumes', 'Management', 'Administrative', 'Private'];
	},
	'notesByDepartment' : function(){
		
		var result = {
			complete : [],
			incomplete : []
		};
		
		var raw = Notes.find({}).fetch();
		
		var placeByDepartment = function(obj, item){
			if(!obj[item.department]){
				obj[item.department] = [];
			}	
			obj[item.department].push(item);
		};
		
		for(var x in raw){
			var item = raw[x];
			if(item.commpleted){
				placeByDepartment(result.complete, item);	
			} else {
				placeByDepartment(result.incomplete, item);
			}
		}
		
		for(var x in result.complete){
			result.complete[x].sort();
		}
		
		for(var x in result.incomplete){
			result.incomplete[x].sort();
		}
		
		return result;
	} 
});

Template.PrintNotes.events();

Template.PrintNoteDetail.helpers({
	'noteForDepartment' : function(dept, complete){
		return Notes.find({	
				department : dept,
				completed : complete
			}, { 
				sort: {
					department : 1,
					created: 1
			}
		});
	},
});