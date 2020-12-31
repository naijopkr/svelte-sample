const { Batch } = require('../models/Batch')

const listBatches = async () => {
    try {
        const batches = await Batch.findAll()
        return JSON.stringify(batches, null, 2)
    } catch (err) {
        throw Error(err.message)
    }
}

module.exports = {
    listBatches
}
