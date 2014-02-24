var MainRouter = Backbone.Router.extend({

	routes: {
		"about" : "aboutPage",
		"about/:name" : "aboutPage"
	},

	initialize: function(){
		console.log('hey guys');
	},

	aboutPage: function(name){
		if (name) {
			console.log('heres a page about', name);
		} else {

		console.log('you are at the about page');
		}
	}


});