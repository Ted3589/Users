/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Delivery', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_departure: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_arrival: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    disstance: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    transport_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Transport',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Delivery',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Delivery_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
