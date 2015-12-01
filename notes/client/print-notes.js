
Template.PrintNotes.helpers({
	'departments' : function(){
		//FIXME make this a dynamic service
		return ['Lighting', 'Scenery', 'Sound', 'Costumes', 'Management', 'Administrative', 'Private'];
	},
	'totalNotes' : function(){
		return Notes.find().count();
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
	'logIt' : function(x){
		console.log("Log it->" + x);
		// if(x){
		// 	for(var u in x){
		// 		console.log('[' + u + ']' + x[u]);		
		// 	}	
		// }
		console.log(x);
	},
	//Returns an object of name, complete[], incomplete[], total
	'notesForDepartment' : function(dept){
		var data = Notes.find({	
				department : dept
			}, { 
				sort: {
					department : 1,
					created: 1
			}
		}).fetch();
		
		console.log(data + " dept " + " length:" + data.length);
		var notesExist = data.length > 0;
		
		var result = {
			name : dept,
			complete : [],
			incomplete : [],
			total : data.length,
			hasNotes : notesExist
		}
		
		for(var x in data){
			if(data[x].completed){
				result.complete.push(data[x]);
			} else {
				result.incomplete.push(data[x]);
			}
		}
		
		return result;
	},
});