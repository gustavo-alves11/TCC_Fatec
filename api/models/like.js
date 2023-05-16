const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like', {
    idLike: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pessoaLike: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pessoa',
        key: 'IdPessoa'
      }
    },
    postLike: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'post',
        key: 'idPost'
      }
    }
  }, {
    sequelize,
    tableName: 'like',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idLike" },
        ]
      },
      {
        name: "like_FK",
        using: "BTREE",
        fields: [
          { name: "postLike" },
        ]
      },
      {
        name: "like_FK_1",
        using: "BTREE",
        fields: [
          { name: "pessoaLike" },
        ]
      },
    ]
  });
};
