'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {

    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id'
      });
    }
  };

  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado){
          if(dado.length < 3) throw new Error('o campo nome deve ter mais de 3 caracteres.')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: true,

      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: { where: {} },
    }
  });
  return Pessoas;
};