var array = [
  {
      nombre: "Jean",
      apellido: "Aldea",
      estatura: 1.74
  },
  {
      nombre: "Sofia",
      apellido: "Silupu",
      estatura: 1.55
  },
  {
      nombre: "Javier",
      apellido: "Llanquileo",
      estatura: 1.80
  }
];

const shortOrTall = ({estatura, nombre}) => {
  if (estatura >= 1.80) {
    console.log(`${nombre} mide ${estatura} y es alto`);
  } else {
    console.log(`${nombre} mide ${estatura} y es bajo`);
  }
}

const pasarAlturaACms = persona => {
  return {
    ...persona,
    estatura: persona.estatura * 100
  };
}

//array.filter(shortOrTall);
const personasCms = array.map(pasarAlturaACms);


console.log(array)
console.log(personasCms);