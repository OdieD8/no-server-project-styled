angular.module("weatherSite")
.directive("dirCurrWeather", function() {
	return {
		restrict: 'E',
      	templateUrl: "app/templates/currWeatherTmpl.html",
		scope: {
			city: "=",
      		weatherCall: "&"
    	},
		controller: function($scope, $stateParams, weatherCallSrvc) {
			weatherCallSrvc.getCurrWeather($stateParams.city).then(function(response) {
				$scope.weatherData = response;
				$scope.city = $stateParams.city.toUpperCase();
			})
		}
	}
});