const { buscarEnderecoPorCep } = require("../services/requests/endereco");

const ERRO_500 = 'Erro interno do servidor!';
const ERRO_404 = 'Endereco não encontrado!';
const ERRO_400 = 'Request inválido!';

const valoresFretePorRegiao = {
  'SP': 'R$ 19,90',
  'RS': 'R$ 39,90',
  'Outros': 'R$ 49,90'
};

module.exports = {
  async obterEnderecoPorCep (req, res) {
    try {
      const {cep} = req.query;
      const endereco = await buscarEnderecoPorCep(cep);
      return res.status(200).json(endereco);
    } catch (erro) {
      console.log(erro);
      if (erro?.name === 'NOT_FOUND'){
        return res.status(404).json({mensagem: erro.message})
      }
      return res.status(500).json({mensagem: ERRO_500});
    }
  },

  async calcularFrete (req, res) {
    try {
      const {cep} = req.query;
      const {uf} = await buscarEnderecoPorCep(cep);
      const regiaoConhecida = uf in valoresFretePorRegiao;
      const valorFrete = valoresFretePorRegiao[regiaoConhecida ? uf : 'Outros']; 
      return res.status(200).json({ valorFrete });
    } catch (erro) {
      console.log(erro);
      if (erro?.name === 'NOT_FOUND'){
        return res.status(404).json({mensagem: erro.message})
      }
      return res.status(500).json({mensagem: ERRO_500});
    }
  }
}