module.exports = function Filme(
  codigo,
  titulo,
  duracao,
  atores,
  anoDeLancamento,
  emCartaz
) {
  this.codigo = codigo;
  this.titulo = titulo;
  this.duracao = duracao;
  this.atores = atores;
  this.anoDeLancamento = anoDeLancamento;
  this.emCartaz = emCartaz;
}