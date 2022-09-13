const discos = require('./discos')

const radio = {
  play: (callback) => {
    console.log('\n************* Iniciando Rádio **************\n')
    // const faixas = callback()

    // for (let i = 0; i < faixas.length; i++) {
    //   if (faixas[i] == faixa) console.log(faixa)
    // }
    // console.log(callback()[indice])
    callback().forEach(musica => console.log(musica))
  }
}

radio.play(discos.tocarDiscoMichaelJackson)
radio.play(discos.tocarDiscoDaJoelma)
radio.play(function () {
  return [
    'November Rain',
    'NightTrain',
    'Sweet Child o mine',
    'Dont you cry'
  ]
})
