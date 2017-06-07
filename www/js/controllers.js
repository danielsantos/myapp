angular.module('app.controllers', [])
.controller('mainCtrl', function ($scope, $stateParams, $http, $window, $state, DatabaseValues) {
	
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
	
	$scope.listarUsuarios = function () {
		
		$scope.usuarios = [];
	
		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao) {
			
			transacao.executeSql('SELECT * FROM usuario', [], function(transacao, resultados) {

			for (var i = 0; i < resultados.rows.length; i++) {
				$scope.usuarios.push(resultados.rows[i]);
			}
			
		});
		
		$state.go($state.current, {}, {reload: true});
			
	});	
		
	
	}
	
	$scope.salvarBD = function (usuario) {
		
		DatabaseValues.setup();
		DatabaseValues.bancoDeDados.transaction(function(transacao) {
			
			transacao.executeSql('INSERT INTO usuario (nome) VALUES (?)', [usuario.nome]);
			
		});
		
		$state.go($state.current, {}, {reload: true});
			
		/*
		$http.post('https://crudrestful.herokuapp.com/usuarios', usuario)
		.success(function(retorno) {
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});
		*/

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

});