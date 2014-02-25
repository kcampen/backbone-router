var MainRouter = Backbone.Router.extend({

	routes: {
		"pizza" : "main",
		"pizza/:name" : "allToppings",
	},

	initialize: function(){
		console.log('hey guys');
	},

	main: function(){
		new PizzaView()

	},

	allToppings: function(topping){

		$('.jumbotron').html('');
		
		var toppingsToShow = toppings.findWhere({topping: topping});

			console.log('hey guys', topping)
			new ToppingView({model: toppingsToShow});
	}

	 // top: function(){
		// var toppings = new ZaCollection(data)
 	// 	toppings.findWhere(data, {topping:"cheese"});
		// 	new ToppingView({model: za});
 	// }



});

// topping: function(name){
// 		var toppings = new ZaCollection(data)
// 		toppings.findWhere(data{topping: 'cheese'});
// 			new ToppingView({model: za});
// 	}