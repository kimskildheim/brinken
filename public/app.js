(function() {
	var myApp = angular.module('myApp', []);


	myApp.controller("MainController", function () {
		var appCtrl = this;
		this.players = players;
		appCtrl.title = 'FK Brinken';
	});
	
	var players = [{
		name: 'Kim',
		price: 2.96,
		description: "Midfielder",
		history:"5 mål",
		show: true,
		isNotPlayingAtBrinken: false,
		images: [{full: 'kim.jpg'}]
	},
	{
		name: 'Torbjørn',
		price: 1.50,
		description: "Defender",
		history:"2 mål",
		show: true,
		isNotPlayingAtBrinken: false,
		images: [{full: 'torbjorn.jpg'}]
	},
	{
		name: 'Halvard',
		price: 2.60,
		description: "Forward",
		history:"4 mål",
		show: true,
		isNotPlayingAtBrinken: false,
		images: [{full: 'halvard.jpg'}]
	}
	];

	myApp.controller('PanelController', function(){
		this.tab = 1;

		this.selectPanel = function(newValue){
			this.tab = newValue;
		};

		this.isSelected = function(tabName){
			return this.tab === tabName;
		};
	});
	
})();
