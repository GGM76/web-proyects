require('dotenv').config()

const Server = require('./server')

const server = new Server()
// Start the server
//server.start(process.env.PORT || 3001)
server.listen()
