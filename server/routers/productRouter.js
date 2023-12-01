const express = require('express')
const { createProduct, getProducts, getProductById, deleteProduct, updateProduct, createProducts, deleteAllProducts } = require('../dao/controllers/productController')
const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
    res.json({ ok: true, products: await getProducts() })
})


productRouter.get('/:pid', async (req, res) => {
    const { pid } = req.params
    console.log(pid)
    let product = await getProductById(pid)
    if (product) {
        res.status(200).json({
            ok: true,
            product
        })
    } else {
        return res.status(404).json({ ok: false, error: 'Product not found' })
    }
})


productRouter.post('/', async (req, res) => {
    const { nombre, precio, stock, descripcion, thumbnail, historia } = req.body
    await createProduct({ nombre, precio, stock, descripcion, thumbnail, historia })
    res.json({ ok: true, products: await getProducts() })
})

productRouter.post('/bulk', async (req, res) => {
    const products = req.body
    await createProducts(products)
    res.json({ ok: true, products: await getProducts() })
})

productRouter.put('/', async (req, res) => {
    console.log(req.body)
    const { _id, nombre, precio, stock, descripcion, thumbnail, historia } = req.body
    let result = await updateProduct({ _id, nombre, precio, stock, descripcion, thumbnail, historia })
    if (result.ok) {
        return res.json({
            ok: true,
            updateProduct: result.updateProduct,
            products: await getProducts()
        })
    } else {
        return res.status(404).json({ ok: false, error: result.error })
    }
})


productRouter.delete('/:pid', async (req, res) => {
    const { pid } = req.params
    console.log(pid)
    let result = await deleteProduct(pid)
    if (result.ok) {
        return res.json({
            ok: true,
            deletedProduct: result.deletedProduct,
            products: await getProducts()
        })
    }
    else {
        return res.status(404).json({ ok: false, error: result.error })
    }

})

productRouter.delete('/', async (req, res) => {
    await deleteAllProducts()
    return res.json({ ok: true })

})



module.exports = productRouter