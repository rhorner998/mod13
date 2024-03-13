// productTag.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');



class ProductTag extends Model {}

ProductTag.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    tag_id: {
      type: DataTypes.INTEGER,
    }
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'productTag',
  }
);

module.exports = ProductTag;
