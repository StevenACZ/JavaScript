class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.altura = altura;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

  shortOrTalllto() {
    if (this.altura >= 1.80) {
      console.log(`${this.nombre} es alto`);
    } else {
      console.log(`${this.nombre} es bajo`);
    }
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrollador`)
  }
}

let steven = new Desarrollador('Steven', 'Coaila');
let erika = new Persona('Erika', 'Luna', 1.54);
let arturo = new Persona('Arturo', 'Martines', 1.84);
