
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pessoa', {
    IdPessoa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emailPessoa: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    
    senhaPessoa: {
      type: DataTypes.STRING(100),
      select: false,
      allowNull: false
    },
    dataNascPessoa: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    funcaoPessoa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'funcao',
        key: 'idFuncao'
      }
    },
    generoPessoa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'genero',
        key: 'idGenero'
      }
    },
    esportePessoa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'esporte',
        key: 'IdEsporte'
      }
    },
    nomeUsuario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'pessoa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdPessoa" },
        ]
      },
      {
        name: "pessoa_FK",
        using: "BTREE",
        fields: [
          { name: "esportePessoa" },
        ]
      },
      {
        name: "pessoa_FK_1",
        using: "BTREE",
        fields: [
          { name: "funcaoPessoa" },
        ]
      },
      {
        name: "pessoa_FK_2",
        using: "BTREE",
        fields: [
          { name: "generoPessoa" },
        ]
      },
    ]
  });
};
