const Filme = require('./filme');
const funcoes = require('./funcoes');
const catalogo = require('./database/catalogo.json');

const cinema = 'DH - Movies';
const nomeArquivo = './database/catalogo.json'

// console.log(cinema);

// console.log(new Filme(1, 'Harry Potter', 90, [], 2001, false));

// console.log(catalogo);

// console.log('O filme encontrado foi: ' + funcoes.buscarFilme(3, catalogo).titulo);

// funcoes.adicionarFilme(
//   new Filme(5, 'Harry Potter 2', 190, [], 2011, false),
//   catalogo,
//   nomeArquivo
// )

// funcoes.alterarStatusEmCartaz(1, catalogo, nomeArquivo, funcoes.buscarFilme);
// console.log(funcoes.buscarFilme(1, catalogo));

// console.log(funcoes.listarFilmesDeLongaDuracao(catalogo, 60))
// console.log(funcoes.listarFilmesDeLongaDuracao(catalogo, 120))
// console.log(funcoes.listarFilmesDeLongaDuracao(catalogo, 180))

funcoes.listarTodosOsFilmes(catalogo)