//////////////////////////
// Funciones Declarativas

function miFuncion() {
  return 3;
}
miFuncion();

/////////////////////////////////////
// Funciones de Expresión o anónimas

var miFuncion = function(a, b) { // Parametros = a, b
  return a + b
}
miFuncion(1, 2);

////////////////////////
// ¡EJEMPLOS!

function saludarEstudiantes(estudiante) {
  console.log(`¡Hola! ${estudiante}`);
}
saludarEstudiantes('Diego'); // ¡Hola! Diego


function sumar(a, b) {
  var resultado = a + b;
  return resultado;
}
console.log(sumar(1, 5)); // 6