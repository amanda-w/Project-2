'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meal_plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.meal_plan.belongsTo(models.user)
    }
  }
  meal_plan.init({
    userId: DataTypes.INTEGER,
    type_of_meal: DataTypes.STRING,
    recipe: DataTypes.STRING,
    meal_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'meal_plan',
  });
  return meal_plan;
};