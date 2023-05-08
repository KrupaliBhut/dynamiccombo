'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class select_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  select_master.init({
    cont_name: DataTypes.STRING,
    sel_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'select_master',
  });
  return select_master;
};