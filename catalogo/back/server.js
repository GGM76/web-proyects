//Constantes para usar las herramientas instaladas
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
//Constante enlacadas con el archivo env
const port = process.env.PORT ||  5000
//constante para que la app use express
const app = express()
//end point para poder hacer peticiones 
app.use('/api/productos', require('./routes/productosRoutes'))
// la api escuhca el servidor e imprimimos en terminal para saber el puerto en el cual esta corriendo 
app.listen(port, () => console.log(`Servidor iniciado en el ${port}`))