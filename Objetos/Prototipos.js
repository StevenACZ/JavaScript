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

let steven = new Persona('Steven', 'Coaila', 1.70);
let erika = new Persona('Erika', 'Luna', 1.54);
let arturo = new Persona('Arturo', 'Martines', 1.84);

steven.shortOrTall();
erika.shortOrTall();
arturo.shortOrTall();