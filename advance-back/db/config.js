const mongoose = require('mongoose')

class Database{
    constructor(){
        this.connection = process.env.MONGO_CNN_DEV
    }

    async dbConnection(){
        try {
            await mongoose.connect(this.connection, {
                useNewUrlParser: true, 
                useUnifiedTopology: true
            })
            console.log("Database Connected Successfully")
            } catch (error) {
                console.log(`Error Connecting to the database ${error}`)
                }
    }
}

module.exports = Database