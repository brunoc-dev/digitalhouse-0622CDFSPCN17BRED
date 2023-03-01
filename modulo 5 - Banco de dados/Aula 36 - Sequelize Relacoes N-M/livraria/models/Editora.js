const criarEditoraModel = (sequelize, dataTypes) => {
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
    tableName: 'editoras',
    timestamps: false
  };

  const Editora = sequelize.define('Editora', colunas, opcoes)

  return Editora;
};

module.exports = criarEditoraModel;