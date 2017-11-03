window.faculty = angular.module('faculty', ['ngAnimate', 'ngRoute', 'BotDetectCaptcha'])
.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
        .when('/', {
            controller: 'SignupCtrl',
            templateUrl: './app/templates/Signup.html'
        })
        .when('/verify', {
        	controller: 'verifyCtrl',
        	templateUrl: './app/templates/verify.html'
        })
        .when('/dashboard', {
        	controller: 'dashboardCtrl',
        	templateUrl: './app/templates/dashboard.html'
        })
        .when('/feedback', {
            controller: 'feedbackCtrl',
            templateUrl: './app/templates/feedback.html'
        });
        // .when('/Signup', {
        // 	controller: 'SignupCtrl',
        // 	templateUrl: '/app/templates/Signup.html',
        // 	reloadOnSearch: false
        // });

        // $locationProvider.html5Mode(true);
        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
    }
]);


faculty.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

faculty.config(function(captchaSettingsProvider) {
  captchaSettingsProvider.setSettings({
    captchaEndpoint: '/bdc4-simple-api-angularjs-captcha-example/botdetectcaptcha'
  });
});
