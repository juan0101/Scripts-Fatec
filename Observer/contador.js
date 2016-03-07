function construtor(){
	var x = 0;
	var listaFuncao = [];
	var objeto = {};
	
	objeto.acrescentarFuncao = function(obs){
		listaFuncao.push(obs);
	}
	
	objeto.executar = function(){
		x++;
		for(var i=0; i<listaFuncao.length; i++){
			listaFuncao[i](x);
		}
	}
	return objeto;
}

function funcexe(valor){
	console.log('Valor de x: ' + valor);
}

function funcexe2(valor){
	console.log('Valor de x:(na func exe2)' + valor);
}

var exe1 = construtor();
var exe2 = construtor();
exe1.acrescentarFuncao(funcexe);
exe1.acrescentarFuncao(funcexe2);

exe2.acrescentarFuncao(funcexe);
exe2.acrescentarFuncao(funcexe2);
exe1.executar();
exe1.executar();
exe1.executar();

exe2.executar();
exe2.executar();
exe2.executar();