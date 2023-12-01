const Product = require('../models/productModel')

/* función para controlar creación de producto */

const createProduct = async (product) => {
    const newProduct = new Product(product)
    try {
        return await newProduct.save()
    }
    catch (err) {
        console.error(err)
    }
}
/* función para controlar creación de productoss */
const createProducts = async (products) => {

    try {
        Product.insertMany(products)
    }
    catch (err) {
        console.error(err)
    }
}

/* función para traer  productos */
const getProducts = async () => {
    return await Product.find({})
}


/* función para traer  producto pid */
const getProductById = async (pid) => {
    return await Product.findById(pid)
}

/* función para traer  producto pid */

const deleteProduct = async (pid) => {
    try {
        const deletedProduct = await Product.findById(pid)
        await Product.deleteOne({ _id: pid })
        if (deletedProduct) {
            return { ok: true, deletedProduct }
        }
        else {
            return { error: 'Producto no encontrado' }
        }
    }
    catch (err) {
        console.log(err)
        return { error: 'Id no válido' }
    }
}

const deleteAllProducts = async () => {
    return await Product.deleteMany({})
}


const updateProduct = async (product) => {
    try {
        console.log(product)
        await Product.updateOne({ _id: product._id }, product)
        return { ok: true }
    }
    catch (err) {
        console.log(err)
        return { error: 'Producto no actualizado' }
    }

}


module.exports = { createProduct, getProducts, getProductById, createProducts, deleteProduct, deleteAllProducts, updateProduct }