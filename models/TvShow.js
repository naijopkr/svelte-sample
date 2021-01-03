const { Sequelize, DataTypes } = require('sequelize')
const { databaseURL } = require('../config/dotenv')
const { Character } = require('./Character')

const sequelize = new Sequelize(databaseURL)

const TvShow = sequelize.define('TvShow', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    releaseYear: {
        type: DataTypes.STRING,
        field: 'release_year'
    },
}, {
    tableName: 'tv_shows',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

TvShow.hasMany(Character, {
    foreignKey: 'tvShowId'
})

module.exports = {
    TvShow
}
