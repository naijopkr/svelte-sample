const express = require('express')
const bodyParser = require('body-parser')

const tvShows = require('./tvShow')

const app = express()
const PORT = process.env.API_PORT || 5000

app.use(bodyParser.json())

app.use('/tvshows', tvShows)

app.listen(PORT, err => {
    if (err) {
        console.log('error', err)
    } else {
        console.log(`Listening to port ${PORT}`)
    }
})
