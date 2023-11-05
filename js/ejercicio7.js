let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese un número"));
let numero3 = parseInt(prompt("Ingrese un número"));

if (numero1 > numero2 && numero1 > numero3) {
  console.log("El " + numero1 + " es el número más grande");
} else {
  if (numero2 > numero1 && numero2 > numero3) {
    console.log("El " + numero2 + " es el número más grande");
  } else{
    console.log("El " + numero3 + " es el número más grande");
  }
}
