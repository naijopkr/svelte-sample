import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize(
    'postgres://postgres:postgres@localhost:5432/sampledb'
)

export const Product = sequelize.define('Product', {
    ean: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING
}, {
    tableName: 'products'
})
