const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post', {
    idPost: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    texto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pessoa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pessoa',
        key: 'IdPessoa'
      }
    }
  }, {
    sequelize,
    tableName: 'post',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPost" },
        ]
      },
      {
        name: "post_FK",
        using: "BTREE",
        fields: [
          { name: "pessoa" },
        ]
      },
    ]
  });
};
