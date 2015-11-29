QuickCue = {};

if(!QuickCue.Msg){
	QuickCue.Msg = {
		AuthFail : "Invalid operation: user is not authenticated"
	};
}

//QuickCue Utilities
if(!QuickCue.Auth){
	QuickCue.Auth = {
		//returns null if valid
		'validUser' : function(){
			var userId = Meteor.userId();
			if(!userId) {
				console.log("[ERROR] Authentication Failed");
				throw QuickCue.Msg.AuthFail;
			}
			return userId;
		}
	};

}

if(!QuickCue.Util){
	QuickCue.Util = {
		'formatDate' : function(date, defautReturn) {
			if(typeof date.getMonth === 'function'){
					return (date.getYear()+1900) + "-" + date.getMonth() + "-" + date.getDay();
			} else {
				return defautReturn;//intentially empty
			}
		}
	}
}