const criarLivroModel = (sequelize, dataTypes) => {
  const colunas = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

    nome: {
      type: dataTypes.STRING,
      allowNull: false,
    },

    autores_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },

    editoras_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
  };

  const opcoes = {
    tableName: 'livros',
    timestamps: false
  };

  const Livro = sequelize.define('Livro', colunas, opcoes);

  Livro.associate = (models) => {
    Livro.belongsTo(models.Editora, {
                     // editora.livros -> array de livros
      as: 'editora', // livro.editora.nome -> nome da editora de um livro
      foreignKey: 'editoras_id'
    });
  };

  return Livro;
};

module.exports = criarLivroModel;