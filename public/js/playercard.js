(function(){
	var myApp = angular.module('player-cards', []);
	
	myApp.directive('playerInfo', function(){
		return {
			restrict: 'E',
			templateUrl: '/html/player-info.html'
		}
	});

	myApp.directive('navbarInfo', function(){
		return {
			restrict: 'E',
			templateUrl: '/html/navbar-info.html',
			controller: function() {
				this.tab = 1;

				this.selectPanel = function (newValue) {
					this.tab = newValue;
				};

				this.isSelected = function (tabName) {
					return this.tab === tabName;
				};
			},
			controllerAs: 'panel'
		};
	});
})();
