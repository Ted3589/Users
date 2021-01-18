/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Role', {
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
    tableName: 'Role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
