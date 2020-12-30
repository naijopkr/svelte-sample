import { Product } from '../models/Product'

export const listProducts = async () => {
    try {
        const products = await Product.findAll()
        return JSON.stringify(products, null, 2)
    } catch (err) {
        throw Error(err.message)
    }
}
