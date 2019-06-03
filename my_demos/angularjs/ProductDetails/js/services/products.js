app.factory('products', ['$http', function($http){
	return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
	.then(function(data){
		return data;
	}, function(err){
		return err;
	})
}]);