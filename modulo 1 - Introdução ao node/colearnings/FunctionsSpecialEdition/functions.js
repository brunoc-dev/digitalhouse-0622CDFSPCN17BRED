// Funções são sub-rotinas.
// Códigos a serem executados em um determinado momento.
// Somente executa o código da sub-rotina quando são chamadas.
// Para chamar a função, basta escrever o nome da função seguido de parênteses!
// Para declarar funções, devemos utilizar palavra reservada function.
// (BOAS PRÁTICAS) O nome da função deve ser um verbo.
// Funções podem receber parâmetros.
// Parâmetros são informações externas que a função depende.
// Parâmetros são posicionais. (devem respeitar a ordem na execução da função)

// const fitaEcletica = [
//   'De que me adianta ...', // 0
//   'We are the champions!', // 1
//   'João botou o melão no gol' // 2
// ]

// const fitaTimMaia = [
//   'Quero ficar bem a vontade, na verdade',
//   'Não quero dinheiro, eu só quero amar',
//   'Eu só quero chocolate'
// ]

// function tocarMusica (fita, trilha) {
//   console.log(fita[trilha])
// }

// function tocarMusicaAleatoria (fita) {
//   for (let index = 0; index < 20; index++) {
//     const trilha = parseInt(Math.random() * 10)

//     if (trilha < fita.length){
//       tocarMusica(fita, trilha)
//     }
//   }
// }

// tocarMusicaAleatoria(fitaTimMaia);
// tocarMusicaAleatoria(fitaEcletica);

// const frutas = [ 'banana', 'abacate', 'tomate' ];
// console.log(frutas[1])

function saudar (nomes, letra, indice) {
  for (let i = 0; i < nomes.length; i++) {
    const nomeAtual = nomes[i];

    if (nomeAtual[indice] == letra) {
      console.log('Olá ' + nomes[i]);
    }
  }
}

saudar(['Danieli', 'Wellington', 'Bruno'], 'r', 0)
console.log('--------------------------------')
saudar(['Rubens', 'Ana', 'Judite'], 'R', 0)