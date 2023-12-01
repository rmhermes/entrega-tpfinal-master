const express = require('express')
const { createMensaje, getMensajes } = require('../dao/controllers/mensajeController')

const mensajeRouter = express.Router()


mensajeRouter.get('/', async (req, res) => {
    res.json({ ok: true, mensajes: await getMensajes() })
})

mensajeRouter.post('/', async (req, res) => {
    const { nombre, apellido, mensaje } = req.body
    await createMensaje({ nombre, apellido, mensaje })
    res.json({ ok: true, mensajes: await getMensajes() })
})



module.exports = mensajeRouter