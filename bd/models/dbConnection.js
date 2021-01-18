const Sequelize = require("sequelize");
const dbConnection = new Sequelize("storebd", "postgres", "05058585q", {
    dialect: "postgres",
    host: "localhost",
    port:"5432",
    define: {
        timestamps: false
    }
});
module.exports = dbConnection;