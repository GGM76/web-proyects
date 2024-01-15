const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
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
    Imagenes: {
        type: String,
    },
    Active: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true //crea campos createdAt y updatedAt automáticamente
})

module.exports = mongoose.model('Producto', productoSchema)