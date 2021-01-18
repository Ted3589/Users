/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Collection', {
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
    tableName: 'Collection',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Collection_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
