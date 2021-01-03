const { Sequelize, DataTypes } = require('sequelize')
const { databaseURL } = require('../config/dotenv')

const sequelize = new Sequelize(databaseURL)

const Character = sequelize.define('Character', {
    name: DataTypes.STRING,
    tvShowId: {
        type: DataTypes.INTEGER,
        field: 'tv_show_id'
    }
}, {
    tableName: 'characters',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = {
    Character
}
