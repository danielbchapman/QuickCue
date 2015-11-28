Template.main.helpers({
	'currentRoute' : function(){
		var route = Router.current().route;
		
		if(!route || !route.getName()){
			return 'Quick Cue';	
		} else {
			return 'Quick Cue: ' + route.getName();
		}
	}
});