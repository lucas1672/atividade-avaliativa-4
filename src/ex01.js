import leia from "readline-sync"

var pessoa = []

for(var i = 0;i < 3;i++){
var nome = leia.question("INFORMR O NOME:");
var idade = leia.question("INFORME A IDADE:");
var obj = {nome: nome, idade: idade}
pessoa.push(obj)
}

console.log(pessoa)