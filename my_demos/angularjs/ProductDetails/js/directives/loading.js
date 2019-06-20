app.directive('loading', function(){
	return {
		restrict: 'E',
		replace: true,
		template: '<div class="loading" style="height: 100%;width: 100%;position: fixed"><span>LOADING...</span></div>',
		link: function(scope, element, attr){
			scope.$watch('loading', function(val){
				if(val){
					$(element).show();
				}
				else{
					$(element).hide();
				}
			});
		}
	}
});