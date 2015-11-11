angular.module("weatherSite")
.directive("dirForecast", function() {
	return {
		restrict: 'E',
      	templateUrl: "app/templates/forecastTmpl.html",
		scope: {
			city: "=",
      		weatherCall: "&"
    	},
		controller: function($scope, $stateParams, weatherCallSrvc) {
			weatherCallSrvc.getForecast($stateParams.city).then(function(response) {
				$scope.weatherForecastData = response;
				$scope.city = $stateParams.city.toUpperCase();
			})
		}
	}
});