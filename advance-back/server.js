const express = require('express')
const cors = require('cors')
const Database = require('./db/config')


class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3001
        this.database = new Database()
        this.usersPath = '/api/usuarios'
        this.middlewares()
        
        this.dbConnection()

        this.routes()
    }

    async dbConnection(){
        await this.database.dbConnection()
    }

    middlewares(){
        this.app.use(cors())
        // Este middleware sirve para recibir datos 
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
        // public
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use( this.usersPath,require('./routes/users.routes'))            
    }
    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Server is running on port ${this.port}`)
        })
    }
}

module.exports = Server