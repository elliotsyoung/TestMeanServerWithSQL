var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/',{                                         //Index
		templateUrl: 'partials/index.html',
		controller: 'indexController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
