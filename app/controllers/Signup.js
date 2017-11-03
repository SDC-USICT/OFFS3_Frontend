faculty.controller('SignupCtrl',function($scope, $location, userService, Captcha) {

	$scope.user = {};
	$scope.name ="";

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

    var basicUrl = '/bdc4-simple-api-angularjs-captcha-example/basic-captcha';

    $scope.validate = function(valid) {

    if (!valid) {
      return;
    }

    var captcha = new Captcha();

    var captchaId = captcha.captchaId;

    // captcha code input value for validating captcha at server-side
    var captchaCode = $scope.captchaCode;

    var postData = {
      captchaId: captchaId,
      captchaCode: captchaCode
    };

    $http({
      method: 'POST',
      url: basicUrl,
      data: JSON.stringify(postData)
    })
      .then(function(response) {
        if (response.data.success) {
          // captcha validation passed at server-side
          $scope.successMessages = 'CAPTCHA validation passed.';
          $scope.errorMessages = null;
        } else {
          // captcha validation falied at server-side
          $scope.errorMessages = 'CAPTCHA validation falied.';
          $scope.successMessages = null;
        }

        // always reload captcha image after validating captcha at server-side
        // in order to update new captcha code for current captcha id
        captcha.reloadImage();
      }, function(error) {
        console.log(error.data);
      });
  };


  	$scope.setCollege = function(singleCollege) {
		$scope.collegeName = singleCollege.collegeName;
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

})
