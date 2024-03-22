
function palabraInvertida(palabra){
    var invertida = "";
    for(i=palabra.length-1; i>=0; i--){
        invertida = invertida + palabra[i];
    }

    return invertida;
}

console.log(palabraInvertida("CASA"));

//2. Crear una funcion que reciba un string como paramtero y que cuente la cantidad de vocales que contiene

function vocalesDeLaPalabra(palabra){
    var vocales = ["a","e","i","o","u"];
    var cantidadVocales = 0;
    for(var i=0; i<palabra.length; i++){
     const tieneVocales = vocales.includes(palabra[i]);
     if (tieneVocales){
        cantidadVocales++;
    }
    }
    return cantidadVocales;
}
//Una funcion que nos diga si una palabra es palindromo 

function esPalindromo(palabra){
    var PInvertida = "";

    for(i=palabra.length-1; i>=0; i--){
        PInvertida += palabra[i];
    }
    return palabra == PInvertida(palabra);
}
console.log(esPalindromo("neuquen"));
//una funcion que dado un numero calcule su factorial 

