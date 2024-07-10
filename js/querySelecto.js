const primerParrafo = document.querySelector("#miContenedor p");
console.log(primerParrafo.textContent);

const elementosConClase = document.querySelectorAll("#otroContenedor .miClase");
elementosConClase.forEach((elemento) => {
  console.log(elemento.textContent);
});
