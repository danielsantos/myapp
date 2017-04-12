angular.module('app.controllers', [])
.controller('mainCtrl', function ($scope, $stateParams, $http, $window, $state) {
	
	$http.get('http://crudrestful.herokuapp.com/usuarios')
	.success(function(lista) {
		$scope.listaDeUsuarios = lista;
	})
	.error(function(erro) {
		console.log(erro);
	});
	
	$scope.cadastrar = function (usuario) {
			
		$http.post('https://crudrestful.herokuapp.com/usuarios', usuario)
		.success(function(retorno) {
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});

	};
	
	$scope.atualizar = function (usuario) {
			
		$http.put('https://crudrestful.herokuapp.com/usuarios/' + usuario.id, usuario)
		.success(function(retorno) {
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});

	};	
	
	$scope.excluir = function (usuario) {
			
		$http.delete('https://crudrestful.herokuapp.com/usuarios/' + usuario.id)
		.success(function(retorno) {
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});

	};	
	
	$scope.save = function(usuario){
		
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
	  
    };

});