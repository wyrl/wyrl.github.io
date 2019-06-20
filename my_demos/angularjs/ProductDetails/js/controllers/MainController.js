app.controller('MainController', ['$scope', '$http',
	function($scope, $http){
		$scope.loading = true;
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
				$scope.loading = false;
				$scope.products = response.data;
			},
			function(err){
				console.log(err);
			}
		);
	}
]);