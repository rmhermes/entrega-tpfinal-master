

const mongoose = require('mongoose')

const MensajeSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    mensaje: { type: String, required: true }
})

const Mensaje = mongoose.model('mensaje', MensajeSchema)

module.exports = Mensaje