function heredaDe(prototipoHijo, prototipoPadre) {
  let fn = function() {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = 20;
  this.altura = altura;
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.shortOrTall = function() {
  if (this.altura >= 1.80) {
    console.log(`${this.nombre} es alto`);
  } else {
    console.log(`${this.nombre} es bajo`);
  }
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrollador`)
}

let steven = new Desarrollador('Steven', 'Coaila');
let erika = new Persona('Erika', 'Luna', 1.54);
let arturo = new Persona('Arturo', 'Martines', 1.84);

