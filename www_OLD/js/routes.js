angular.module('starter')
.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('login');

	$stateProvider
	
	.state('app.listar', {
		url : '/listar',
		templateUrl : 'templates/listar.html'
	});
	
});