(function() {
	var myApp = angular.module('myApp', []);


	myApp.controller("MainController", function () {
		var appCtrl = this;
		this.players = player;
		appCtrl.title = 'FK Brinken';
	});
	
	var player = {
		name: 'Kim',
		price: 2.96,
		description: "Midfielder"
	}
	
})();
