const numero = parseInt(prompt("Ingrese un número"));

if (numero % 2 === 0) {
    alert('El '+ numero + ' es divisible en 2');
} else {
    if (numero % 3 === 0){
        alert('El '+ numero + ' es divisible en 3');
    } else {
        if (numero % 5 === 0) {
            alert('El '+ numero + ' es divisible en 5');
        } else {
            if (numero % 7 === 0) {
                alert('El '+ numero + ' es divisible en 7');
            } else {
                alert(numero + ' no es divisibe en 2, 3, 5 ni 7');
            }
        }
    }
}