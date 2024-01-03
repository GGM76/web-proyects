const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    user:{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref:'User'
    },
    sku: {
        type: String,
        required: [true, ' Por favor teclea el sku del producto']
    },
    ML: {
        type: String,
        required: [true, ' Por favor teclea el codigo ML del producto']
    },
    A: {
        type: String,
        required: [true, ' Por favor teclea el codigo amazon del producto']
    },
    Titulo: {
        type: String,
        required: [true, ' Por favor escriba el titulo del producto']
    },
    Descripcion: {
        type: String,
        required: [true, ' Por favor escriba la descripcion del producto']
    },
    Variante: {
        type: String,
    },
    HEX: {
        type: String,
    },
    Active: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true //crea campos createdAt y updatedAt automáticamente
})

module.exports = mongoose.model('Producto', productoSchema)