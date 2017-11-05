faculty.controller('dashboardCtrl',function($scope, $location, $rootScope, userService) {

	$scope.user = {}


	$scope.getUser = function() {
		var enrollment_no = '00117301616';
		var tablename = 'usap_student_2016';

		userService.getUser(enrollment_no, tablename, function(response) {
			console.log(response);
			$scope.user= response[0];

		})
	}

	$scope.getUser();

})
