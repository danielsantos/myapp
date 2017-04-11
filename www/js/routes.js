angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
	.state('menu.jogosDisponVeis', {
			url: '/page1',
			views: {
				'side-menu21': {
					templateUrl: 'templates/cadastrar.html',
					controller: 'mainCtrl'
			}
		}
	})

  .state('menu.jogos', {
    url: '/jogos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/excluir.html',
        controller: 'mainCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'mainCtrl'
  })

  .state('menu.meusJogos', {
    url: '/meusJogos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/atualizar.html',
        controller: 'mainCtrl'
      }
    }
  })

  .state('menu.dadosCadastrais', {
    url: '/dadosCadastrais',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listar.html',
        controller: 'mainCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/side-menu21/dadosCadastrais')

});