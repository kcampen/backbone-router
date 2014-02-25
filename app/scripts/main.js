console.log('p i z z a');

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();

		// new MainView ({model: za});
	})




$('.pizza-btn').on('click', function(){
	new PizzaView()
	
})

$('.jumbotron').on('click', 'cheese-btn', 'pep-btn', function(){
	
	var toppings = new ZaCollection(data)

	toppings.each(function(za){
		new ToppingView({model: toppings});
})

});
