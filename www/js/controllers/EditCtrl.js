angular.module('app.controllers')
.controller('EditCtrl', function($scope, $state, $http, $window){
	 
    /*TODO CRIAR UMA SERVICE*/	 
	//$scope.user = angular.copy(UserStore.get($state.params.userId));
	$scope.user = {};
	
	$http.get('http://crudrestful.herokuapp.com/usuarios/' + $state.params.userId)
	.success(function(usuario) {
		$scope.usuario = usuario;
	})
	.error(function(erro) {
		console.log(erro);
	});
	
	
    $scope.save = function(usuario) {
		
		if ($state.params.userId != null) {
			
			/* ATUALIZANDO */
			
			usuario.id = $state.params.userId;
			
			$http.put('https://crudrestful.herokuapp.com/usuarios/' + $scope.user.id, usuario)
			.success(function(retorno) {
				
				$http.get('http://crudrestful.herokuapp.com/usuarios')
				.success(function(lista) {
					$scope.users = lista;
				})
				.error(function(erro) {
					console.log(erro);
				});
				
				$state.go('menu.list');
				$window.location.reload();
				
			})
			.error(function(erro) {
				console.log(erro);
			});
			
		} else {
			
			/* ADICIONANDO */
			
			$http.post('https://crudrestful.herokuapp.com/usuarios', usuario)
			.success(function(retorno) {
			
				$http.get('http://crudrestful.herokuapp.com/usuarios')
				.success(function(lista) {
					$scope.users = lista;
				})
				.error(function(erro) {
					console.log(erro);
				});
				
				$state.go('menu.list');
				$window.location.reload();
			
			})
			.error(function(erro) {
				console.log(erro);
			});
			
		}
      
    };
		
});