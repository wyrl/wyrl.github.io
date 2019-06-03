app.controller('MainController', ['$scope', '$http',
	function($scope, $http){
		$http({
		  method: 'GET',
		  url: 'https://wyrltestapi.000webhostapp.com/wp-admin/admin-ajax.php?action=itemlist',
		  headers: {
   			'Content-Type': 'application/json'
 			}
		})
		.then(
			function(response){
				console.log(response);
				$scope.products = response.data;
			},
			function(err){
				console.log(err);
			}
		);
	}
]);