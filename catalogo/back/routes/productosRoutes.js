const express = require('express')
const router = express.Router()
const { getProductos, createProducto, updateProducto, deleteProducto} = require('../controllers/productosControllers')

//Obtener la lista de productos
router.get('/', getProductos)

//Creacion de productos 
router.post('/', createProducto)

//Actualizar productos
router.put('/:sku', updateProducto)

//Eliminar productos
router.delete('/:sku', deleteProducto)

module.exports = router