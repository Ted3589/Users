/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Role',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    patronymic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mail: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
