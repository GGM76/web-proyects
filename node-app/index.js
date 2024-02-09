//Levantar un servidor 
const express = require('express')
const app = express()

app.get('/' , (req, res) =>{
    res.send('<h2>Todo funcionando al 100 esto debe de tardar mas de lo debido obtuvimos un volumen anonimo que cagado </h2>')
})

const port = process.env.PORT || 3000

app.listen(port, () =>
    console.log(`Servidor corriendo en http://localhost:${port}`)
)