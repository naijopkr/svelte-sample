const { Product } = require('../models/Product')

const listProducts = async () => {
    try {
        const products = await Product.findAll()
        return JSON.stringify(products, null, 2)
    } catch (err) {
        throw Error(err.message)
    }
}

const createProduct = async (ean, name, description, price) => {
    return Product.create({
        ean,
        name,
        description,
        price
    }).then(product => JSON.stringify(product, null, 2))
}

module.exports = {
    listProducts,
    createProduct
}
