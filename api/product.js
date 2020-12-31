const { createProduct } = require('../controllers/ProductController')

const post = (req, res, next) => {
    const { ean, name, description, price } = req.body
    console.log({ ean })
    createProduct(ean, name, description, price).then(data => {
        res.setHeader('Content-Type', 'application/json')
        res.status(201)
        res.end(data)
    }).catch(error => console.log(error))
}

module.exports = {
    post
}
