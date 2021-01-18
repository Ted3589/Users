var DataTypes = require("sequelize").DataTypes;
var _Brand = require("./Brand");
var _Category = require("./Category");
var _Collection = require("./Collection");
var _Delivery = require("./Delivery");
var _Orders = require("./Orders");
var _Products = require("./Products");
var _Role = require("./Role");
var _Transport = require("./Transport");
var _Type = require("./Type");
var _Users = require("./Users");

function initModels(sequelize) {
  var Brand = _Brand(sequelize, DataTypes);
  var Category = _Category(sequelize, DataTypes);
  var Collection = _Collection(sequelize, DataTypes);
  var Delivery = _Delivery(sequelize, DataTypes);
  var Orders = _Orders(sequelize, DataTypes);
  var Products = _Products(sequelize, DataTypes);
  var Role = _Role(sequelize, DataTypes);
  var Transport = _Transport(sequelize, DataTypes);
  var Type = _Type(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);


  Delivery.belongsTo(Transport, { foreignKey: "transport_id"});
  Transport.hasMany(Delivery, { foreignKey: "transport_id"});
  Orders.belongsTo(Delivery, { foreignKey: "delivery_id"});
  Delivery.hasMany(Orders, { foreignKey: "delivery_id"});
  Orders.belongsTo(Products, { foreignKey: "products_id"});
  Products.hasMany(Orders, { foreignKey: "products_id"});
  Orders.belongsTo(Users, { foreignKey: "users_id"});
  Users.hasMany(Orders, { foreignKey: "users_id"});
  Products.belongsTo(Brand, { foreignKey: "brand_id"});
  Brand.hasMany(Products, { foreignKey: "brand_id"});
  Products.belongsTo(Category, { foreignKey: "category_id"});
  Category.hasMany(Products, { foreignKey: "category_id"});
  Products.belongsTo(Collection, { foreignKey: "collection_id"});
  Collection.hasMany(Products, { foreignKey: "collection_id"});
  Products.belongsTo(Type, { foreignKey: "type_is"});
  Type.hasMany(Products, { foreignKey: "type_is"});
  Users.belongsTo(Role, { foreignKey: "role_id"});
  Role.hasMany(Users, { foreignKey: "role_id"});

  return {
    Brand,
    Category,
    Collection,
    Delivery,
    Orders,
    Products,
    Role,
    Transport,
    Type,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
