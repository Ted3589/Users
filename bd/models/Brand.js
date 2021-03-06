/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Brand', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Brand',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Brand_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
