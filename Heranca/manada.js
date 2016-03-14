function Animal() {
  this.som = '';
}

Animal.prototype = {
	fazerBarulho: function(){
		return this.som;
	}
};

function Cachorro(){
	Animal.call(this);
	this.som = 'Au'
}

var CachorroPrototype = new Animal();
Cachorro.prototype = CachorroPrototype;

function Gato(){
	Animal.call(this);
	this.som = 'Miau'
}

var GatoPrototype = new Animal();
Gato.prototype = GatoPrototype;

var animal = new Cachorro();
console.log(animal.som);
console.log(animal.fazerBarulho());

var animal2 = new Gato();
console.log(animal2.som);
console.log(animal2.fazerBarulho());



function Manada(){
	this.listaManada =[];
}

Manada.prototype = {
	adicionar: function(animal){
		this.listaManada.push(animal);
	}
};

function ManadaSustenido(){
	Manada.call(this);
}

var ManadaSustenidoPrototype = new Manada();
ManadaSustenidoPrototype.barulhos = function(){
		var saida = "";
		for (i= 0; i < this.listaManada.length; i++) {
		if(i == this.listaManada.length-1)
			saida+=" "+this.listaManada[i].fazerBarulho()+"#"+" "+this.listaManada[i].fazerBarulho();
		else
			saida+=" "+this.listaManada[i].fazerBarulho()+"#"+" "+this.listaManada[i].fazerBarulho()+"#";
		};
		return saida;
	};

ManadaSustenido.prototype = ManadaSustenidoPrototype;

function ManadaVirgula(){
	Manada.call(this);
}

var ManadaVirgulaPrototype = new Manada();
ManadaVirgulaPrototype.barulhos = function(){
		var saida = "";
		for (i= 0; i < this.listaManada.length; i++) {
		if(i == this.listaManada.length-1)
			saida+=" "+this.listaManada[i].fazerBarulho();
		else
			saida+=" "+this.listaManada[i].fazerBarulho()+",";
		};
		return saida;
	};
	
ManadaVirgula.prototype = ManadaVirgulaPrototype;

var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());
// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());