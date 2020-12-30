import { Batch } from '../models/Batch'

export const listBatches = async () => {
    try {
        const batches = await Batch.findAll()
        return JSON.stringify(batches, null, 2)
    } catch (err) {
        throw Error(err.message)
    }
}
