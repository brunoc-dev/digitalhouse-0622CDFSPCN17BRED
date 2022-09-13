const fs = require('fs');

module.exports = {
  adicionarFilme: function (filme, catalogo, nomeArquivo) {
    catalogo.push(filme)
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
    return 'Filme adicionado com sucesso!'
  },

  buscarFilme: function (codigoFilme, catalogo) {
    for (let i = 0; i < catalogo.length; i++) {
      if (catalogo[i].codigo == codigoFilme) {
        return catalogo[i]
      }
    }
  },

  alterarStatusEmCartaz: function (codigoFilme, catalogo, nomeArquivo, callbackDeBusca) {
    const filme = callbackDeBusca(codigoFilme, catalogo);
    filme.emCartaz = !filme.emCartaz;
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2));
  },

  listarFilmesDeLongaDuracao: (catalogo, duracaoMinima) => {
    return catalogo.filter(elementoDoArray => elementoDoArray.duracao > duracaoMinima)
  },

  listarTodosOsFilmes: catalogo => catalogo.forEach(filme => console.log(filme.titulo))
}
