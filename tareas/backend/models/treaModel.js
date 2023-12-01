const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user:{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref:'User'
    },
    texto: {
        type: String,
        required: [true, ' Por favor teclea el texto de la tarea']
    }
},{
    timestamps: true //crea campos createdAt y updatedAt automáticamente
})

module.exports = mongoose.model('Tarea', tareaSchema)