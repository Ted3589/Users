/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    users_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    products_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Products',
        key: 'id'
      }
    },
    delivery_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Delivery',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
