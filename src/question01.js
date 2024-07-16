import leia from "readline-sync"

// Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas vogais esse texto ou palavra tem. 
// Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.
function contarVogais(texto) {
    texto = texto.toLowerCase();
    var contador = 0;
    var vogais = "aeiou"; 
    
    for (var i = 0; i < texto.length; i++) {
        
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    
    return contador;
}
var texto = leia.questionFloat("Digite um texto ou palavra:");
var numeroVogais = contarVogais(texto);
console.log(`O texto "${texto}" contem ${numeroVogais} vogais.`);
