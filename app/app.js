angular.module("weatherSite", ["ui.router"]).config(function($urlRouterProvider, $stateProvider) {
	
	$stateProvider
		.state("homePage", {
			url: "/home",
			templateUrl: "app/templates/homeTmpl.html",
			controller: "mainCtrl"
		})
		.state("currWeather", {
			url: "/current-weather/:city",
			templateUrl: "app/templates/currWeatherPage.html",
			controller: "mainCtrl"
		})
		.state("forecast", {
			url: "/forecast/:city",
			templateUrl: "app/templates/forecastPage.html",
			controller: "mainCtrl"
		})
		$urlRouterProvider.otherwise("/home");
});