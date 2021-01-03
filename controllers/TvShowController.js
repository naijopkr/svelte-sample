const { TvShow } = require('../models/TvShow')

const listTvShow = async () => {
    try {
        const tvShows = await TvShow.findAll()
        return JSON.stringify(tvShows, null, 2)
    } catch (err) {
        throw Error(err.message)
    }
}

const createTvShow = async (name, description, releaseYear) => {
    return TvShow.create({
        name,
        description,
        releaseYear
    }).then(tvShow => JSON.stringify(tvShow, null, 2))
}

module.exports = {
    listTvShow,
    createTvShow
}
