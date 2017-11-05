faculty.factory('userService', ['$http', '$timeout', '$rootScope', function($http, $timeout, $rootScope) {
	return {
		send_details: function(collegeName, user, callback) {
		  $http({
                method: 'POST',
                url: BACKEND + '/initials',
                params: {
                    "college_name" : collegeName,
                    "enrollment_no" : user.rollno,
                    "email": user.email,
                    "type": user.category
                }

            }).then(function(response) {

                if (callback) {
                    callback(response.data);
                }
            }, function(response) {
                console.error(response);
            });
        },

        verifyUser: function(otp, callback) {
            $http({
                method:'POST',
                url: BACKEND + '/verify',
                params: {
                    'password': otp
                }
            }).then(function(response) {
                if (callback) {
                    callback(response.data);
                }

            }, function(response) {
                console.error(response)
                if (callback) {
                    callback(response.data);
                }
            })
        },

        getDetails: function(token , callback) {
            $http({
                method: 'GET',
                url: BACKEND + '/feedbackform',
                params: {
                    "token" : token
                }
            }).then(function(response) {
                if (callback) {
                    callback(response.data);
                }
            }, function(response) {
                console.error(response);
            })
        }

	}
}])
