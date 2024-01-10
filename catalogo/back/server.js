//Constantes para usar las herramientas instaladas
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { connect } = require('mongoose')
const cors = require('cors')

//Se conecta a la base con el arcgivo de configuracion que hicimos 
connectDB()

//Constante enlacadas con el archivo env
const port = process.env.PORT ||  5000
//constante para que la app use express
const app = express()
app.use(cors())
// usa librerias de expres como jsnon y urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Son las rutas que definimos para poder hacer nuestras apicaciones
app.use('/api/productos',require('./routes/productosRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)//se utiliza para saber si hubo un erro 
//se usa para saber si hubo un error en el servidor 
app.listen(port, () => console.log(`Servidor correindo en ${port}`))