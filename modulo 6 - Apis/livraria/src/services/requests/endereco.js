const axios = require('axios');
const cepApi = require('../cepApi');

module.exports = {
  async buscarEnderecoPorCep (cep) {
    const { data } = await axios({
      ...cepApi,
      method: 'get',
      url: `/cep/v1/${cep}`
    });

    if (!data) throw new Error('Não foi possível consultar a api de cep!');

    return {
      cep: data.cep,
      uf: data.state,
      cidade: data.city,
      bairro: data.neighborhood,
      rua: data.street
    }
  }
}