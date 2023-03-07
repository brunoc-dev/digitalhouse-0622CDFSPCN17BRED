const criaAutorTemLivroModel = (sequelize, datatypes) => {
  const colunas = {
    id: {
      type: datatypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },

    autores_id: {
      type: datatypes.INTEGER.UNSIGNED,
      allowNull: false,
    },

    livros_id: {
      type: datatypes.INTEGER.UNSIGNED,
      allowNull: false,
    }
  }

  const opcoes = {
    tableName: 'autores_tem_livros',
    timestamps: false
  }

  return sequelize.define('AutorTemLivro', colunas, opcoes);
};

module.exports = criaAutorTemLivroModel