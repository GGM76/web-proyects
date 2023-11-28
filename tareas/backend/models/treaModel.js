const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        required: [true, ' Por favor teclea el texto de la tarea']
    }
},{
    timestamps: true //crea campos createdAt y updatedAt automáticamente
})

module.exports = mongoose.model('Tarea', tareaSchema)