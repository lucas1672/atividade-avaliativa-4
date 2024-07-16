import leia from "readline-sync"

function calcularPontuacaoGeral(gols, passesCertos, passesErrados) {
    var pontosPorGol = 50;
    var pontosPorPasseCerto = 10;
    var pontosPorPasseErrado = -5;
    var  pontuacao = (gols * pontosPorGol) + (passesCertos * pontosPorPasseCerto) + (passesErrados * pontosPorPasseErrado);
    var  desempenho;
    if (pontuacao < 50) {
        desempenho = "Pessima partida.";
    } else if (pontuacao >= 50 && pontuacao < 100) {
        desempenho = "Partida ruim.";
    } else if (pontuacao >= 100 && pontuacao < 150) {
        desempenho = "Fez o basico.";
    } else if (pontuacao >= 150 && pontuacao < 200) {
        desempenho = "Foi bem na partida.";
    } else {
        desempenho = "Jogou demais!";
    }

    return { pontuacao: pontuacao, desempenho: desempenho };
}

function futebol() {

    var nome = leia.question("Digite o nome do jogador:");
    var gols = leia.questionInt("Digite a quantidade de gols marcados pelo jogador:");
    var passesCertos = leia.questionInt("Digite o numero de passes certos realizados pelo jogador:");
    var passesErrados = leia.questionInt("Digite a quantidade de passes errados do jogador:");

    var resultado = calcularPontuacaoGeral(gols, passesCertos, passesErrados);

  
    console.log(`Resultado para o jogador ${nome}:`);
    console.log(`- Pontuacao: ${resultado.pontuacao}`);
    console.log(`- Desempenho: ${resultado.desempenho}`);
}


futebol();
