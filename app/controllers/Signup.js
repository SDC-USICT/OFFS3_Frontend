faculty.controller('SignupCtrl',function($scope, $location, userService) {

	$scope.user = {};
	$scope.name ="";

$scope.collegeList = [ {collegeName : "University School of Law and Legal Studies",
							 collegeCode :"" },
						    {collegeName :"University School of Management Studies",
							 collegeCode: ""},
						    {collegeName :"University School of Education",
							 collegeCode:  ""},
							{collegeName :"University School of BioTechnology",
							 collegeCode : "usbt"},
             				{collegeName :"University School of Chemical Technology",
             				collegeCode : "usct"},
             				{collegeName :"University School of Environment Management",
             			     collegeCode : ""},
             			    {collegeName :"University School of Mass Communication",
             				 collegeCode : ""},
             				{collegeName :"University School of Basic and Applied Sciences",
             				collegeCode :  "usbas"},
             				{collegeName :"University School of Architecture and Planning",
             				 collegeCode : ""},
             				{collegeName :"University School of Humanities and Social",
             				 collegeCode : ""},
             				 { collegeName :"University School of Information,Communication and Technology",
             				 collegeCode : "usict"
             				 }];

    $scope.userCategoryList = [
    	"student", "teacher", "dean" , "Pro VC", "VC"
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
