const criarAutorModel = (sequelize, dataTypes) => {
  const colunas = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    nome: {
      type: dataTypes.STRING,
      allowNull: false
    }
  };

  const opcoes = {
    tableName: 'autores',
    timestamps: false
  };

  const Autor = sequelize.define('Autor', colunas, opcoes);

  return Autor;
};

module.exports = criarAutorModel;