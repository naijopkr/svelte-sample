const { Sequelize, DataTypes } = require('sequelize')
const { databaseURL } = require('../config/dotenv')

const sequelize = new Sequelize(databaseURL)

const Product = sequelize.define('Product', {
    ean: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    inStock: {
        type: DataTypes.INTEGER,
        field: 'in_stock'
    },
    price: DataTypes.FLOAT
}, {
    tableName: 'products',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = {
    Product
}
