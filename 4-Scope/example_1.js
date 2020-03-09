//////////////////////////
// Scope

var miNombre = 'Steven';

function nombre() {
  var miApellido = 'Coaila';
  console.log(`${miNombre} ${miApellido}`);
}

nombre(); // Steven Coaila;

console.log(miNombre); // Steven 
console.log(typeof miApellido); // Error & undefined