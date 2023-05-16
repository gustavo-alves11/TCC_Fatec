var DataTypes = require("sequelize").DataTypes;
var _esporte = require("./esporte");
var _funcao = require("./funcao");
var _genero = require("./genero");
var _like = require("./like");
var _pessoa = require("./pessoa");
var _post = require("./post");

function initModels(sequelize) {
  var esporte = _esporte(sequelize, DataTypes);
  var funcao = _funcao(sequelize, DataTypes);
  var genero = _genero(sequelize, DataTypes);
  var like = _like(sequelize, DataTypes);
  var pessoa = _pessoa(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);

  pessoa.belongsTo(esporte, { as: "esportePessoa_esporte", foreignKey: "esportePessoa"});
  esporte.hasMany(pessoa, { as: "pessoas", foreignKey: "esportePessoa"});
  pessoa.belongsTo(funcao, { as: "funcaoPessoa_funcao", foreignKey: "funcaoPessoa"});
  funcao.hasMany(pessoa, { as: "pessoas", foreignKey: "funcaoPessoa"});
  pessoa.belongsTo(genero, { as: "generoPessoa_genero", foreignKey: "generoPessoa"});
  genero.hasMany(pessoa, { as: "pessoas", foreignKey: "generoPessoa"});
  like.belongsTo(pessoa, { as: "pessoaLike_pessoa", foreignKey: "pessoaLike"});
  pessoa.hasMany(like, { as: "likes", foreignKey: "pessoaLike"});
  post.belongsTo(pessoa, { as: "pessoa_pessoa", foreignKey: "pessoa"});
  pessoa.hasMany(post, { as: "posts", foreignKey: "pessoa"});
  like.belongsTo(post, { as: "postLike_post", foreignKey: "postLike"});
  post.hasMany(like, { as: "likes", foreignKey: "postLike"});

  return {
    esporte,
    funcao,
    genero,
    like,
    pessoa,
    post,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
