angular.module('app.controllers', [])
  
.controller('jogosDisponVeisCtrl', function ($scope, $stateParams, $http) {
	
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
	
	/*
	$http.get('http://localhost:3000/api/jogos_game_router')
	.success(function(retorno) {
		console.log(retorno);
		$scope.jogos = retorno;
	})
	.error(function(erro) {
		console.log(erro);
	});
	*/

})
   
.controller('detalhesDoJogoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('jogosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cadastreSeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('meusJogosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dadosCadastraisCtrl', function ($scope, $stateParams, $http) {


	$scope.submeter = function(dadosCadastrais) {
		
		$http.post('http://localhost:3000/api/dados_cadastrais', dadosCadastrais, null)
		.success(function(retorno) {
			$scope.mensagem = 'Dados atualizados com sucesso';
			console.log(retorno);
		})
		.error(function(erro) {
			console.log(erro);
		});
			
	}

})
   
.controller('jogoEscolhidoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 