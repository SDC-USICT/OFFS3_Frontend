faculty.controller('SignupCtrl',function($scope, $rootScope, $location, userService, Captcha) {

	$scope.user = {};
	$scope.name = "";

	$scope.collegeList = [ {
		collegeName : "University School of Law and Legal Studies",
		collegeCode :"uslls"},

		{collegeName :"University School of Management Studies",
		collegeCode: "usms"},

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

		{collegeName :"University School of Info.,Comm. and Technology",
		collegeCode : "usict"
		}
	];



    $scope.userCategoryList = [
    	"student", "teacher", "dean" , "Pro VC", "VC"
    ];

  	$scope.setCollege = function(singleCollege) {
		$scope.college = singleCollege;
	}

	$scope.setUserCategory =  function(userCategory) {
		$scope.user.category = userCategory;
	}

	$scope.findSemister = function() {
		var roll = _.clone($scope.user.rollno);
		var	year = roll.substring(roll.length -2, roll.length);
		$scope.user.semister = (17 - year)*2 + 1;
	}

	$scope.LoginUser = function() {
	
			$scope.hidebutton = true;
			$scope.showSpinner = true;
		if (!$scope.collegeName && !$scope.user.category && !$scope.user.rollno && !$scope.user.email) {
			return;
		}

		userService.send_details($scope.college.collegeCode, $scope.user, function(response) {
			if (response == 400) {
				$location.path('/')

			}else {
				$rootScope.tablename = $scope.college.collegeCode + '_' + $scope.user.category;
				$rootScope.rollno = $scope.user.rollno;
				$location.path('/verify');
			}
		})
	
	}

	$scope.verifyUser = function() {
		if (!$scope.otp) {
			return;
		}
		var tablename = $rootScope.tablename;
		var rollno = $rootScope.rollno;

		userService.verifyUser($scope.otp, tablename, rollno, function(response) {
			if (response == 400) {
				alert('User is not verified');
				$location.path('/');
			} else {
				$rootScope.userDetails = response;
				$location.path('/dashboard');
			}

		})
	}
})
