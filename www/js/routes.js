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
        templateUrl: 'templates/jogosDisponVeis.html',
        controller: 'jogosDisponVeisCtrl'
      }
    }
  })

  .state('menu.detalhesDoJogo', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detalhesDoJogo.html',
        controller: 'detalhesDoJogoCtrl'
      }
    }
  })

  .state('menu.jogos', {
    url: '/jogos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jogos.html',
        controller: 'jogosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('cadastreSe', {
    url: '/page4',
    templateUrl: 'templates/cadastreSe.html',
    controller: 'cadastreSeCtrl'
  })

  .state('menu.meusJogos', {
    url: '/meusJogos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meusJogos.html',
        controller: 'meusJogosCtrl'
      }
    }
  })

  .state('menu.dadosCadastrais', {
    url: '/dadosCadastrais',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dadosCadastrais.html',
        controller: 'dadosCadastraisCtrl'
      }
    }
  })

  .state('menu.jogoEscolhido', {
    url: '/jogoEscolhido',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jogoEscolhido.html',
        controller: 'jogoEscolhidoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});