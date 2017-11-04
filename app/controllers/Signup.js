faculty.controller('SignupCtrl',function($scope, $location, userService, Captcha) {

	$scope.user = {};
	$scope.name = "";

	$scope.collegeList = [ {
		collegeName : "University School of Law and Legal Studies",
		collegeCode :"uslls"
		},
		{
			collegeName :"University School of Management Studies",
			collegeCode: "usms"
		},
		    {collegeName :"University School of Education",
			 collegeCode:  "use"},
			{collegeName :"University School of BioTechnology",
			 collegeCode : "usbt"},
				{collegeName :"University School of Chemical Technology",
				collegeCode : "usct"},
				{collegeName :"University School of Environment Management",
			     collegeCode : "usem"},
			    {collegeName :"University School of Mass Communication",
				 collegeCode : "usmc"},
				{collegeName :"University School of Basic and Applied Sciences",
				collegeCode :  "usbas"},
				{collegeName :"University School of Architecture and Planning",
				 collegeCode : "usap"},
				{collegeName :"University School of Humanities and Social",
				 collegeCode : "ushs"},

				 { collegeName :"University School of Information,Communication and Technology",
				 	collegeCode : "usict"
				 }
	];



    $scope.userCategoryList = [
    	"student", "teacher", "dean" , "Pro VC", "VC"
    ];

  	$scope.setCollege = function(singleCollege) {
		$scope.collegeName = singleCollege.collegeName;
		console.log(singleCollege);
		console.log($scope.collegeName);
	}

	$scope.setUserCategory =  function(userCategory) {
		$scope.user.category = userCategory;
	}

	$scope.LoginUser = function() {
		// if (!$scope.collegeName && !$scope.user.category && !$scope.user.rollno && !$scope.user.email) {
		// 	return;
		// }

		// userService.send_details($scope.collegeName, $scope.user, function(response) {

			$location.path('/verify');
		// })
	}
	alert("asdjkasd");
})
