//Dado un valor numérico entero m, determinar e imprimir un listado con los m primeros múltiplos de 3 que no sean múltiplos de 5.

function primerosMultiplosDeTresSinCinco(m) {
    var multiplos = [];
    var numeroActual = 1;
    
    while (multiplos.length < m) {
        var esMultiploDeTres = numeroActual % 3 == 0;
        var esMultiploDeCinco = numeroActual % 5 == 0;
        
        if (esMultiploDeTres && !esMultiploDeCinco) {
            multiplos.push(numeroActual);
        }

        numeroActual++;
    }    
    return multiplos;
}
console.log("Los primeros" + m +"son multiplos de 3 que no son multiplos de 5");

//Desarrollar una función que dado un número nos diga si es primo
function esPrimo(numero){
    if (actualNumero <= 1) {
        return false;
    }
    //aca deberia ir un while xq con el return corto el ciclo
    for (i=2; i<(numero/2); i++){ 
        // Si el número es divisible por algún otro número que no sea 1 o él mismo, no es primo
        if(actualNumero % i == 0){
            return false;
        }
     // Si no se encontró ningún divisor entre 2 y la raíz cuadrada del número, es primo
     else return true;
    }
}

if (esPrimo(actualNumero)) {
        console.log(actualNumero + " es primo.");
    } else {
        console.log(actualNumero + " no es primo.");
    }

    //while(i)

//Desarrollar la función pow que recibe una base y un exponente y retorne la potencia.

function pow(base, exponente) {
    // si el exponente es 0, el resultado es siempre 1
    if (exponente == 0) {
        return 1;
    } 
    else {
        resultado = base;
        
        for (i = 1; i < exponente; i++) {
            resultado *= base;
        }
        
        return resultado;
    }
}
console.log(base + "elevado a la" + exponente + "es igual a" + resultado);
console.log()

//Dado un número entero que representa una suma de dinero, desarrollar un programa que indique que cantidades de billetes de $1000, $500, $200, $100, $50, $20, $10 y monedas de $5, $2, $1 se deben utilizar para alcanzar dicho monto, dando prioridad a los billetes de mayor valor.

const billetes = [1000, 500, 200, 100, 50, 20, 10, 5,2,1];
//usar while y hacer division y multip

function cantidadDeBilletesYMonedas (numeros){

}
//crear una funcion que reciba un array por parametro y que reciba un nuevo array sin los elementos duplicados 

const array=[2,4,4,5,6,6,8];
var arraySinDuplicados= [];



for(i=1; i<array.length; i++){
    const = seRepite = arraySinDuplicados.inlcudes(array[1]);
    if (!);
numeros.includes()
}


//1. Crear una funcion que cree una string como parametro y devuelva el string invertido

