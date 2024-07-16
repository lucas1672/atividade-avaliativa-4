import leia from "readline-sync"



// Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário a unidade de medida de origem, a temperatura, e a unidade de medida para qual deseja fazer a conversão. Nesse momento você deve levar em consideração apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit. No final o algoritmo deve informar a temperatura na unidade de medida escolhida.

// ```markdown
// Celsius para Fahrenheit = F = (C * 1.8) + 32 
// Fahrenheit para Celsius = C = (F - 32) * (5/9)

// Celsius para Kelvin = K = C + 273.15 
// Kelvin para Celsius = C = K - 273.15

// Fahrenheit para Kelvin = K = (F - 32) * (5/9) + 273.15 
// Kelvin para Fahrenheit = F = (K - 273.15) * 1.8 + 32
function converterTemperatura(origem, temperatura, destino) {
    
     var resultado;

    
    if (origem === 'Celsius') {
        if (destino === 'Fahrenheit') {
            resultado = (temperatura * 1.8) + 32;
        } else if (destino === 'Kelvin') {
            resultado = temperatura + 273.15;
        } else {
            resultado = temperatura; 
        }
    }

    
    else if (origem === 'Fahrenheit') {
        if (destino === 'Celsius') {
            resultado = (temperatura - 32) * (5/9);
        } else if (destino === 'Kelvin') {
            resultado = (temperatura - 32) * (5/9) + 273.15;
        } else {
            resultado = temperatura; 
        }
    }

    
    else if (origem === 'Kelvin') {
        if (destino === 'Celsius') {
            resultado = temperatura - 273.15;
        } else if (destino === 'Fahrenheit') {
            resultado = (temperatura - 273.15) * 1.8 + 32;
        } else {
            resultado = temperatura; 
        }
    }

    return resultado;
}


function temperaturas() {
    var origem = leia.questionInt("Digite a unidade de medida de origem (Celsius, Fahrenheit ou Kelvin):");
    var temperatura = leia.questionFloat("Digite a temperatura a ser convertida:");
    var  destino = leia.questionFloat("Digite a unidade de medida para qual deseja converter (Celsius, Fahrenheit ou Kelvin):");
    var resultado = converterTemperatura(origem, temperatura, destino);
    console.log(`A temperatura ${temperatura} ${origem} é igual a ${resultado.paseFlot(2)} ${destino}.`);
}


temperaturas();

