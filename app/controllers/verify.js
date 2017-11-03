faculty.controller('verifyCtrl',function($scope, $location, userService) {

	$scope.user = {};

	$scope.verifyUser = function() {
		if(!$scope.user.otp) {
			return;
		}

		userService.verifyUser($scope.user.otp, function(response) {
			if (response) {
				$location.path("/dashboard");
			} else {
				$location.path("/");
			}


		})
	}
})
