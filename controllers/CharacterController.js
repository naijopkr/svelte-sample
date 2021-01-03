const { Character } = require('../models/Character')

const listCharacters = async (tvShowId) => {
    console.log({ tvShowId })
    try {
        const characters = await Character.findAll({
            where: {
                tvShowId
            }
        })
        return JSON.stringify(characters, null, 2)
    } catch (err) {
        throw Error(err.message)
    }
}

const createCharacter = async (name, tvShowId) => {
    return Character.create({
        name,
        tvShowId
    }).then(character => JSON.stringify(character, null, 2))
}

module.exports = {
    listCharacters,
    createCharacter
}
