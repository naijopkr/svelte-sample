import { Product } from '../../models/Product'

export function get(req, res, next) {
    Product.findAll().then(products => {
        return JSON.stringify(products, null, 2)
    }).then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.end(data)
    }).catch(error => console.log(error))
}
