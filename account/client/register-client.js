Template.registerForm.events({
	"submit form": function(e){
		e.preventDefault();
		
		var email = $("[name=email]").val();
		var password = $("[name=password]").val();
		
		Accounts.createUser({
			email: email, 
			password: password
		}, function(error){
			if(error){
				alert(error.reason);
			} else {
				Router.go('Home');
			}
		});
	}
});

Template.registerForm.helpers({
	
});

Template.loginForm.events({
	"submit form": function(e){
		e.preventDefault();
		
		var _email = $("[name=email]").val();
		var _password = $("[name=password]").val();
		
		Meteor.loginWithPassword(_email, _password, function(error){
				if(error){
					alert(error);		
				} else {
					Router.go('Home');
				}
			});
	}
});

Template.loginForm.helpers({
	
});