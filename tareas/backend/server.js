const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { connect } = require('mongoose')
const cors = require('cors')
const port = process.env.PORT ||  5000

connectDB()

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tareas',require('./routes/tareasRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Servidor correindo en ${port}`))

