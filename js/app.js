angular.module('ionic', ['ionic'])

.controller("MainCtrl", function(){
	console.log("Main Controller Says: Hello World");
	})
	
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
		
		.state('main', {
			url: "/main",
			templateUrl: "templates/main.html",
			controller: 'MainCtrl'
		})
		
		$urlRouterProvider.otherwise('/main');
	});