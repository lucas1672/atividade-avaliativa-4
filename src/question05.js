import leia from "readline-sync"
function verificarViciacaoRoleta(numeroDeRodadas) {
    
    var contadorVerde = 0;
    var contadorVermelho = 0;
    var  contadorPreto = 0;

    for (var i = 0; i < numeroDeRodadas; i++) {
       
        var numero = Math.floor(Math.random() * 37);

        if (numero === 0) {
            contadorVerde++; 
        } else if (numero % 2 === 1) {
            contadorVermelho++; 
        } else {
            contadorPreto++; 
        }
    }

    var total = contadorVerde + contadorVermelho + contadorPreto;
    var percentualVerde = (contadorVerde / total) * 100;
    var percentualVermelho = (contadorVermelho / total) * 100;
    var percentualPreto = (contadorPreto / total) * 100;

    if (percentualVerde > 40 || percentualVermelho > 40 || percentualPreto > 40) {
        console.log("A roleta pode estar viciada.");
    } else {
        console.log("A roleta parece estar equilibrada.");
    }

   
    console.log(`Resultados  ${numeroDeRodadas} rodadas:`);
    console.log(` Verde: ${contadorVerde} vezes (${percentualVerde.toFixed(2)}%)`);
    console.log(` Vermelho: ${contadorVermelho} vezes (${percentualVermelho.toFixed(2)}%)`);
    console.log(` Preto: ${contadorPreto} vezes (${percentualPreto.toFixed(2)}%)`);
}


verificarViciacaoRoleta(50);
