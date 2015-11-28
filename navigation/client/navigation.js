Template.navRoute.helpers({
	'activeRoute' : function(name){
		console.log(Router);
		console.log(Router.current());
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