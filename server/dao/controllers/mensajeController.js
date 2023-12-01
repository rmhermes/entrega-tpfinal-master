const Mensaje = require('../models/mensajeModel')





const getMensajes = async () => {
    return await Mensaje.find({})
}


const createMensaje = async (mensaje) => {
    const newMensaje = new Mensaje(mensaje)
    try {
        return await newMensaje.save()
    }
    catch (err) {
        console.error(err)
    }
}


module.exports = { getMensajes, createMensaje }