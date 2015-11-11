angular.module("weatherSite").service("weatherCallSrvc", function($http, $q) {
	this.getCurrWeather = function(city) {
		var deferred = $q.defer();
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=df5df3cba0b4f25ad2c024bb5cc306a1";
		$http ({
			method: "GET",
			url: url
		}).then(function(response) {
			if(response.data.cod === "404") {
				window.location.href = "/#/home";
				return alert("Invalid City Name");
			}
			else {
			var temp = response.data.main.temp;
			var weatherDesc = response.data.weather[0].description;
			var wind = response.data.wind.speed;
			var results = {
				temp: temp,
				weather: weatherDesc,
				wind: wind
			}
			deferred.resolve(results);
			}
  		});
		return deferred.promise;
	};
	
	this.getForecast = function(city) {
		var deferred = $q.defer();
		var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial&APPID=df5df3cba0b4f25ad2c024bb5cc306a1";
		$http ({
			method: "GET",
			url: url
		}).then(function(response) {
			if(response.data.cod === "404") {
				window.location.href = "/#/home";
				return alert("Invalid City Name");
			}
			else {
			var list = response.data.list;
			var day = [];
			for(var i = 0; i < list.length; i++) {
				day.push(list[i].dt);
			}
			var dayArr = [];
			var dateArr = [];
			var monthArr = [];
			day.forEach(function(x) {
				var date = new Date(x*1000);
				var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
				var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
				var dayOfWeek = days[date.getDay()];
				var dateOfWeek = date.getDate();
				var month = months[date.getMonth()];
				dayArr.push(dayOfWeek);
				dateArr.push(dateOfWeek);
				monthArr.push(month);
			})
			var results = {
				day: dayArr,
				date: dateArr,
				month: monthArr,
				list: list
			}
			deferred.resolve(results);
			}
  		});
		return deferred.promise;
	};
	
});