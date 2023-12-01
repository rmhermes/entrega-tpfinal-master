/* CONEXIÓN CON MONGODB */


const mongoose = require('mongoose')

const CONNECTION_STRING = process.env.CONNECTION_STRING

mongoose.connect(CONNECTION_STRING + 'productos_vivero', {
    useNewUrlParser: true,
})
    .then(() => {
        console.log('Conexión exitosa')
    })
    .catch((err) => {
        console.error(err)
    })



module.exports = mongoose