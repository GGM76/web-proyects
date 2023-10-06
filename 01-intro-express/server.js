const express = require ('express');
const petsRouter = require('./api/v1/pets')
const app = express()
app.use(express.urlencoded({extend: true}))
app.use(express.json())
app.get ('/', (resquest, response) => {
    response.send('Haciendo pruebas para el servidor aunque esto no tiene sentido tu lo aprendiste solo en unas dos horas')
})

app.use(petsRouter)
app.listen (3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})

    