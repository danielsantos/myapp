angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
	.state('menu.jogosDisponVeis', {
			url: '/page1',
			views: {
				'side-menu21': {
					templateUrl: 'templates/cadastrar.html',
					controller: 'jogosDisponVeisCtrl'
			}
		}
	})

  .state('menu.jogos', {
    url: '/jogos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/excluir.html',
        controller: 'jogosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.meusJogos', {
    url: '/meusJogos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/atualizar.html',
        controller: 'meusJogosCtrl'
      }
    }
  })

  .state('menu.dadosCadastrais', {
    url: '/dadosCadastrais',
    views: {
      'side-menu21': {
        templateUrl: 'templates/listar.html',
        controller: 'dadosCadastraisCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/side-menu21/page1')
  

});