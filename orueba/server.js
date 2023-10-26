const express = requiere('express')
const cors = require('cors')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3001
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Esta aplicacion corre en el puerto ${this.port}')
    })
    }
}