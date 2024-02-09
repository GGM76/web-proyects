const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const { getProductos, getOneProducto, createProducto, updateProducto, deleteProducto} = require('../controllers/productosControllers')

//Obtener la lista de productos
router.get('/', getProductos)

//Obtener un solo producto
router.get('/:sku', getOneProducto)

//Creacion de productos 
router.post('/crear', createProducto)

//Actualizar productos
router.put('/:sku/modificar', updateProducto)

//Eliminar productos
router.delete('/:sku', deleteProducto)

module.exports = router