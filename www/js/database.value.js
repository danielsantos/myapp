angular.module('app')
.value('DatabaseValues', {
	bancoDeDados : null,
	setup : function() {
		this.bancoDeDados = window.openDatabase('aluraCar', '1.0', 'Banco de Dados da aplicacao', 3000);
	}
})