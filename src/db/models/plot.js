'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'plots'
      });
    }
  };
  Plot.init({
    plotNumber: DataTypes.STRING,
    estate: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    estateAddress: DataTypes.STRING,
    plotDimensions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plot',
  });
  return Plot;
};