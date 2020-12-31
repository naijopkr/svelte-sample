import { listProducts, createProduct } from '../../../controllers/ProductController'

export function get(req, res, next) {
    listProducts().then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.end(data)
    }).catch(error => console.log(error))
}
