/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
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
    tableName: 'Category',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Category_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
