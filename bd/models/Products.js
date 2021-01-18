/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Products', {
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
    },
    price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Brand',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    collection_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Collection',
        key: 'id'
      }
    },
    type_is: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
