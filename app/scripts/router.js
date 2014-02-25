var MainRouter = Backbone.Router.extend({

	routes: {
		"pizza" : "aboutPage",
		"pizza/:name" : "aboutPage"
	},

	initialize: function(){
		console.log('hey guys');
	},

	aboutPage: function(name){
		if (name) {
			console.log('heres a page about', name);
		} else {

		console.log('you are at the pizza page');
		}
	}


});