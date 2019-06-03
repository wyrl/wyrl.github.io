app.directive('productItem', function(){
	return {
		restrict: 'E',
		scope: {
			item: '='
		},
		templateUrl: 'js/directives/ProductItem/ProductItem.html',
		link: function(scope, element, attrs){
			var detail = scope.item.detail;
			var less = true;
			scope.link_text = "more";
			scope.item.short_text = detail.length > 100 ? detail.substring(0, 100) + "..." : detail;
			scope.item.full_detail = scope.item.short_text;

			scope.more = function(detail){
				scope.item.full_detail = less ? scope.item.detail : scope.item.short_text;
				scope.link_text = less ? "less" : "more";
				less = !less;
			}
		}
	};
})