var MainRouter = Backbone.Router.extend({

	routes: {
		"pizza" : "main",
		"pizza/:name" : "allToppings",
		"pizza/allToppings/:name" : "top"
	},

	initialize: function(){
		console.log('hey guys');
	},

	main: function(name){
		new PizzaView()

	},

	allToppings: function(topping){
		var toppings = new ZaCollection(data)

		toppings.each(function(za){
			new ToppingView({model: za});
		})
	},
	 top: function(){
		var toppings = new ZaCollection(data)
 		toppings_.findWhere(data, {topping:'cheese'});
			new ToppingView({model: za});
 	}





});

// topping: function(name){
// 		var toppings = new ZaCollection(data)
// 		toppings.findWhere(data{topping: 'cheese'});
// 			new ToppingView({model: za});
// 	}