import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize(process.env.DATABASE_URL)

export const Product = sequelize.define('Product', {
    ean: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
}, {
    tableName: 'products'
})
