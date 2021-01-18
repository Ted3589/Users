/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
