/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Transport', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    model: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Transport',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "transport_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
