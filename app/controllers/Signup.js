faculty.controller('SignupCtrl',function($scope, $location, userService) {

	$scope.user = {};
	$scope.name ="";

	$scope.collegeList = [ "University School of Law and Legal Studies" , "University School of Management Studies", "University School of Education", "University School of BioTechnology" ,
             "University School of Chemical Technology","University School of Environment Management", "University School of Mass Communication",
             "University School of Basic and Applied Sciences", "University School of Architecture and Planning", "University School of Humanities and Social"];

    $scope.userCategoryList = [
    	"Student", "Teacher", "Dean" , "Pro VC", "VC"
    ];

  	$scope.setCollege = function(singleCollege) {
		$scope.collegeName = singleCollege;
	}

	$scope.setUserCategory =  function(userCategory) {
		$scope.user.category = userCategory;
	}

	$scope.LoginUser = function() {
		if (!$scope.collegeName && !$scope.user.category && !$scope.user.rollno && !$scope.user.email) {
			return;
		}

		userService.send_details($scope.collegeName, $scope.user, function(response) {

			$location.path('/verify');
		})
	}
})
