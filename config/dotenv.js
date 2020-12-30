require('dotenv').config()

module.exports = {
    databaseURL: process.env.DATABASE_URL,
    nodeEnv: process.env.NODE_ENV
}
