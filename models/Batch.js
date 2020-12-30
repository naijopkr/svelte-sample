import { Sequelize, DataTypes } from 'sequelize'
import { databaseURL } from '../config/dotenv'

const sequelize = new Sequelize(databaseURL)

export const Batch = sequelize.define('Batch', {
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
