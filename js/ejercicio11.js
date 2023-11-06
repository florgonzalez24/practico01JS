const numero = parseInt(prompt("Ingrese un número"));

if (
  numero % 2 === 0 &&
  numero % 3 === 0 &&
  numero % 5 === 0 &&
  numero % 7 === 0
) {
  alert("El " + numero + " ingresado es divisible en 2, 3 ,5 y 7");
} else {
    document.write(numero + ' es divisible en: ')
  if (numero % 2 === 0) {
    document.write(" 2 ");
  }
  if (numero % 3 === 0) {
    document.write(" 3 ");
  }
  if (numero % 5 === 0) {
    document.write(" 5 ");
  }
  if (numero % 7 === 0) {
    document.write(" 7 ");
  }
}