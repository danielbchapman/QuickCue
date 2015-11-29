Template.navRoute.helpers({
	'activeRoute' : function(name){
		var route = Router.current().route;

		if(!route || !route.getName()){
			return '';
		}
		return name == route.getName() ? 'active' : '';
	},
	'currentRoute' : function(){
		var route = Router.current().route;
		
		if(!route || !route.getName()){
			return 'Quick Cue';	
		} else {
			return 'Quick Cue: ' + route.getName();
		}
	}
});

Template.navigation.events({
		"submit form" : function(e){
		e.preventDefault();
		var obj = {
			'label' : e.target.label.value,
			'department' : e.target.department.value,
			'description' : e.target.description.value
		};
		console.log(obj);
		Meteor.call('noteAdd', obj);
		$(e.target).closest('form').find("input[type=text], textarea, input[type=password]").val("");
	}
});
