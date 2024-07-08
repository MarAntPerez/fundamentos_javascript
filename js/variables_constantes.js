// Declaracion de una varable
// var edad;

// Asignacion del valor
// edad = 28;

var edad = 25;
var nombre = "Juan";
var saldo = 100.58;

// Reasignacion de valores a variables
nombre = "Martha";
edad = 35;

// var tiene nun ambito de funcion que puede llevar a comportamientos extraños
// function ejemploVar() {
//   var x = 10;
//   if (true) {
//     var x = "Dentro del true: " + 20;
//     console.log(x);
//   }
//   console.log("Fuera del true: " + x);
// }

// ejemploVar();

// let
let apellido = "Montoya";
let mayorEdad = true;
console.log(apellido);

function ejemploLet() {
  let y = 30;
  if (true) {
    let y = "Dentro del true: " + 40;
    console.log(y);
  }
  console.log("Fuera del true: " + y);
}

ejemploLet();

// console.log(saldo);

// Constantes
const pi = 3.1416;
const nombreConstante = "Ana";

// No se puede reasignar valores a constantes
// pi = 56.239; Esto es un  error

console.log(pi);

function ejemploConst() {
  const z = 60;
  if (true) {
    const z = 50;
    console.log(z);
  }
  console.log(z);
}

ejemploConst();
