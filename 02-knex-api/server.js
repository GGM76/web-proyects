require('dotenv').config()
const express = require('express')
const homeRoutes = require('./routes/homeRoutes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/v1', homeRoutes)
// routes

app.listen(3000, () => console.log('Server on : 3000'))
