faculty.controller('dashboardCtrl',function($scope, $location, userService) {

	$scope.details = {};


	$scope.getDetails = function() {
		userService.getDetails(token, function(response) {
			$scope.details = response.data;
		});
	}
})
