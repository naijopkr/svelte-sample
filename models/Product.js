import { Sequelize, DataTypes } from 'sequelize'
import { databaseURL } from '../config/dotenv'

const sequelize = new Sequelize(databaseURL)

export const Product = sequelize.define('Product', {
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
