const mongoose = require('mongoose')

const Product = mongoose.model('product', {
    thumbnail: String,
    nombre: String,
    precio: Number,
    stock: Number,
    descripcion: String,
    historia: String
})

module.exports = Product