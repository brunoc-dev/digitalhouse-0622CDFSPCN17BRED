const discos = {
  tocarDiscoMichaelJackson: function () {
    console.log('************* Tocando Michael Jackson... **************')

    return [
      'Billie Jean',
      'Smooth Criminal',
      'Thriller',
      'Black or White',
      'Beat it'
    ]
  },

  tocarDiscoDaJoelma: () => {
    console.log('************* Tocando Calypso... *************')

    return [
      'A lua me traiu, acreditei que era pra valer',
      'Chorando se foi, quem um dia só me fez chorar',
      'Acelerou, acelerou, acelerou meu coração',
      'CALYPSO!!! Tchuru, tchururururu...'
    ]
  },

  tocarDiscoBrega: () => {
    console.log('Tocando os clássicos do brega music...')

    return [
        'Garçom... aqui nessa mesa de bar...',
        'Dizem que o seu coração, voa mais que avião...',
        'Quero vê-la sorri, quero vê-la cantar, quero ver...',
        'Você é fogo e eu sou paixão'
    ]
  },

  tocarDiscoDoRaulSeixas: () => {
    console.log('Tocando Raul...')

    return [
      'Eu nasci... há 10 mil anos atrás',
      'Eu vou ficaaaaaar... ah... ficar com certeza...',
      'Eu sou a luz das estrelas, eu sou a cor do luar...',
      'Quem não tem colírio usa óculos escuro...'
    ]
  }
}

module.exports = discos