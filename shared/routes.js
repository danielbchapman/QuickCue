//Routes for iron:router
Router.route('/Register');
Router.route('/About');
Router.route("/Account");

Router.route('/CueSheet', { template: 'CueSheet'});

Router.route('/Notes', {
	name: 'Notes', 
	template: 'Notes'
	});
Router.route('/Instruments');
Router.route('/', {
	template: 'Home'
});

//Printing
Router.route('/Print/CueSheet', {
	name: 'PrintCues',
	template: 'PrintCues'
});

Router.route('/Print/Notes', {
	name: 'PrintNotes',
	template: 'PrintNotes'
});
console.log("registered routes");

//Router Defaults
Router.configure({
	layoutTemplate : 'main'
});