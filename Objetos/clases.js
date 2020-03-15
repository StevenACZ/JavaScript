class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.altura = altura;
  }

  saludar(fn) {
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    if (fn) {
      fn(nombre, apellido, false)
    }
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

  saludar(fn) {
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarrollador`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira, no sabia que eras desarrollador/a`)
  }
}

let steven = new Desarrollador('Steven', 'Coaila', 1.70);
let erika = new Persona('Erika', 'Luna', 1.54);
let arturo = new Persona('Arturo', 'Martines', 1.84);

steven.saludar(responderSaludo)
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
