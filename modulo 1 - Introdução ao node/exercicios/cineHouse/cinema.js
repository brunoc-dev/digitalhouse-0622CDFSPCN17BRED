const Filme = require('./filme');
const funcoes = require('./funcoes');

const cinema = 'DH - Movies';

console.log(cinema);

console.log(new Filme(1, 'Harry Potter', 90, [], 2001, false));

const catalogo = [];

funcoes.adicionarFilme(new Filme(1, 'Harry Potter', 90, ['Daniel Radclif'], 2001, false), catalogo);
funcoes.adicionarFilme(new Filme(2, 'Codigo de Conduta', 180, ['Vin Diesel'], 2011, false), catalogo);
funcoes.adicionarFilme(new Filme(3, 'Animais Fantásticos', 120, ['Ezra Miller'], 2021, true), catalogo);
funcoes.adicionarFilme(new Filme(4, 'Velozes e Furiosos 27', 90, ['Vin Diesel'], 2022, true), catalogo);

console.log(catalogo);

console.log('O filme encontrado foi: ' + funcoes.buscarFilme(3, catalogo).titulo);

funcoes.alterarStatusEmCartaz(1, catalogo);
console.log(funcoes.buscarFilme(1, catalogo));