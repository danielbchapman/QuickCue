//QuickCue Utilities
QuickCue = {};	

if(!QuickCue.Auth){
	QuickCue.Auth = {
		//returns null if valid
		'validUser' : function(){
			var userId = Meteor.userId();
			if(!userId) {
				throw QuickCue.Msg.AuthFail;
			}
			return userId;

		},
		'' : "Invalid operation: user is not authenticated"
	};

}

if(!QuickCue.Msg){
	QuickCue.Msg = {
		AuthFail : "Invalid operation: user is not authenticated"
	};
}