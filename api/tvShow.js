const express = require('express')
const router = express.Router()

const { createTvShow, listTvShow } = require('../controllers/TvShowController')
const { listCharacters, createCharacter } = require('../controllers/CharacterController')

router.get('/:tvShowId', (req, res) => {
    const { tvShowId } = req.params
    listCharacters(tvShowId).then(data => {
        res.header({ 'Content-Type': 'application/json' })
        res.end(data)
    })
})

router.post('/:tvShowId', (req, res) => {
    const { tvShowId } = req.params
    const { name } = req.body
    createCharacter(name, tvShowId).then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.status(201)
        res.end(data)
    }).catch(err => {
        res.status(500)
        res.send(err.message)
    })
})

router.get('/', (req, res) => {
    listTvShow().then(data => {
        res.header({ 'Content-Type': 'application/json' })
        res.end(data)
    }).catch(err => {
        res.status(500)
        res.send(err.message)
    })
})

router.post('/', (req, res, next) => {
    const { name, description,  releaseYear } = req.body
    createTvShow(name, description, releaseYear).then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.status(201)
        res.end(data)
    }).catch(err => {
        res.status(500)
        res.send(err.message)
    })
})

module.exports = router
