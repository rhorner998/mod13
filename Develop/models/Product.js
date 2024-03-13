// product.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
   },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    categoryId: { // This is the foreign key addition
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // This is a reference to the table name
        key: 'id',
      },
    }
  }, 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
