// Escreva um algoritmo para verificar se palavra é um palíndromo. Uma palavra palíndromo é uma palavra que é igual,
// lendo ela de trás para frente. Novamente, lembrando que uma string é um vetor de caracteres.

// Opcional, você pode criar uma lógica para verificar se um texto é palíndromo também. Para isso, você deve ignorar espaços. 
// Segue abaixo, uma forma de remover espaços com JavaScript.

// ```javascript
// var str = "   Exemplo de string com espaços   ";
// var novaStr = str.replaceAll(" ", "")
// ```
// Exemplos de Palíndromos
// ```markdown
// - ovo
// - ana
// - reviver
// - a torre da derrota
// - o lobo ama o bolo
function verificarPalindromo(texto) {
     var textoSemEspacos = texto.replaceAll(" ", "").toLowerCase();
    var  textoInvertido = textoSemEspacos.split("").reverse().join("");
    if (textoSemEspacos === textoInvertido) {
        return true;
    } else {
        return false;
    }
}
var palindromos = [
    "ovo",
    "ana",
    "reviver",
    "a torre da derrota",
    "o lobo ama o bolo"
];
palindromos.forEach(palindromo => {
    console.log(`A palavra/frase "${palindromo}" é um palíndromo? ${verificarPalindromo(palindromo)}`);
});
