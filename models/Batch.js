const { Sequelize, DataTypes } = require('sequelize')
const { databaseURL } = require('../config/dotenv')

const sequelize = new Sequelize(databaseURL)

const Batch = sequelize.define('Batch', {
    code: DataTypes.STRING,
    productEAN: {
        type: DataTypes.STRING,
        field: 'product_ean'
    },
    qty: DataTypes.STRING,
    deliveryDate: {
        type: DataTypes.DATE,
        field: 'delivery_date'
    },
}, {
    tableName: 'batches',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})

module.exports = {
    Batch
}
