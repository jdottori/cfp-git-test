"use strict"
console.log("Hola!!!");

let contador = 0;
const cantidad = 1;

console.log("Linea 1 ")
function saludar() {
    console.log("Linea 2 ")
    "use strict"
    contador = contador + cantidad;
    console.log("hiciste click "+contador+" veces!")
    alert("le sumaste "+cantidad+"!")
    console.log("Linea 3 ")
}

console.log("Linea 4 ")

function saludarNombre() {
    let n = document
                .querySelector("#in-nombre")
                .value;
    console.log(n);
    document.querySelector("#out").innerHTML = n;
}
//<input type="text" oninput="saludarNombre()">
