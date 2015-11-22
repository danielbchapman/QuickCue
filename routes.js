//Routes for iron:router
Router.route('/Register');
Router.route('/About');
Router.route("/Account");
Router.route('/CueSheet', { template: 'CueSheet'});
Router.route('/Instruments');
Router.route('/', {
	template: 'Home'
});
console.log("registered routes");