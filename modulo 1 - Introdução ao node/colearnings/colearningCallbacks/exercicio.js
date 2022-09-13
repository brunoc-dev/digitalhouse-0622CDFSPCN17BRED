function rolarODadoDeSeisFaces () {
  return parseInt(Math.random() * 6) + 1
}

function rolarMultiplosDados (nDados, rolarDado) {
  const rolagens = [];
  let maiorNumero = 0;

  for (let i = 0; i < nDados; i++) {
    rolagens.push(rolarDado());
  };

  rolagens.forEach(resultado => {
    if (resultado > maiorNumero) maiorNumero = resultado;
  });

  return maiorNumero;
}

function rolarDadoDeVinteFaces () {
  return parseInt(Math.random() * 20) + 1
}

function oJogo (jogador, nDados, rolarODado, dadoARolar) {
  // const pontuacaoVitoriosa = 6;

  const valorSorteado = rolarODado(nDados, dadoARolar)

  switch (valorSorteado) {
    case 6:
      console.log(jogador + ' ganhou o jogo');
      break;

    case 4:
      console.log('A banca paga meia');
      break;
    case 5:
      console.log('Uuuh, foi quase');
      break;

    default:
      console.log('Não foi dessa vez!');
      break;
  }
}

oJogo('Wellington', 1, rolarMultiplosDados, rolarODadoDeSeisFaces)
oJogo('Tunico', 1, rolarMultiplosDados, rolarODadoDeSeisFaces)
oJogo('Vin Diesel', 1, rolarMultiplosDados, rolarODadoDeSeisFaces)
oJogo('Diego', 2, rolarMultiplosDados, rolarDadoDeVinteFaces)
oJogo('Bruno', 1, rolarMultiplosDados, rolarODadoDeSeisFaces)
