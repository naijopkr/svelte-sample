import { Product } from '../../models/Product'

export const get = (req, res, next) => {
    return Product.findAll().then(products => products)
}
