//importaciones
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
const productRouter = require('./routers/productRouter')
const mensajeRouter = require('./routers/mensajeRouter')

//config
dotenv.config()
const mongoose = require('./config/dbConfig')
const Product = require('./dao/models/productModel')
const Mensaje = require('./dao/models/mensajeModel')
const app = express()
const PORT = process.env.PORT || 4004

//middlewere
app.use(express.static(path.join(__dirname + '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

//routers
app.use('/api/products', productRouter)
app.use('/api/mensajes', mensajeRouter)



app.listen(PORT, () => {
    console.log(`El servidor está corriendo en : http://localhost:${PORT}/`)
})


