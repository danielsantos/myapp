angular.module('app.controllers', [])
  
.controller('mainCtrl', function ($scope, $stateParams, $http) {
	
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
			console.log(retorno);
			$state.go('menu.dadosCadastrais');
		})
		.error(function(erro) {
			console.log(erro);
		});
		
      //UserStore.create($scope.user);
      //$state.go('list');
	  
    };

})

  .controller('ListCtrl', function($scope, $http) {
	
	$scope.users = [];
	
	$http.get('http://crudrestful.herokuapp.com/usuarios')
	.success(function(lista) {
		$scope.users = lista;
	})
	.error(function(erro) {
		console.log(erro);
	});	
	
	$scope.remove = function(userId){
  
		$http.delete('https://crudrestful.herokuapp.com/usuarios/' + userId)
		.success(function(retorno) {
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});
		
		$http.get('http://crudrestful.herokuapp.com/usuarios')
		.success(function(lista) {
			$scope.users = lista;
		})
		.error(function(erro) {
			console.log(erro);
		});
	  
	}
	
	
	/*
	$scope.reordering = false;
	$scope.users = UserStore.list();
	
	$scope.remove = function(userId){
	  UserStore.remove(userId);
	}

	$scope.move = function(user, fromIndex, toIndex){
	  UserStore.move(user, fromIndex, toIndex);
	}

	$scope.toggleReordering = function(){
	  $scope.reordering = !$scope.reordering;
	}
	*/
	
})

  .controller('EditCtrl', function($scope, $state, $http, $window){
	  
	//$scope.user = angular.copy(UserStore.get($state.params.userId));
	$scope.user = {};
	
	$http.get('http://crudrestful.herokuapp.com/usuarios/' + $state.params.userId)
	.success(function(usuario) {
		$scope.usuario = usuario;
	})
	.error(function(erro) {
		console.log(erro);
	});
	
	
    $scope.save = function(usuario){
		
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
			//$route.reload();
			$window.location.reload();
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});
		
		
      //UserStore.update($scope.user);
      //$state.go('list');
    };
		
  });