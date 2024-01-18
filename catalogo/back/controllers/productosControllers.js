//Archivo con la funcion de los end points 
const asyncHandler = require('express-async-handler')
const Producto = require('../models/productModel')

//Obtiene todos los productos que se hacen 
const getProductos = asyncHandler (async (req,res) => {
    const productos = await Producto.find()
    res.status(200).json(productos) 
})

//Crea el producto que hagas
const createProducto = asyncHandler (async (req,res) => {
    // revisa si hay algo escrito en el sku 
    if(!req.body.sku){
        res.status(400)
        throw new Error('No escrbiste un sku')
    }
    //crea la constante para el producto 
    const producto = await Producto.create({
        sku: req.body.sku,
        ML: req.body.ml,
        A: req.body.a,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        variante: req.body.variante,
        imagenes: req.body.imagen,
    })
    res.status(201).json(producto)        
})
//Modifica el producto que elegiste 
const updateProducto = asyncHandler(async (req,res) => {
    const producto = await Producto.findOne({sku: req.params.sku})
    if(!producto){
        res.status(404)
        throw new Error ('producto no enconrtado')
    }
    //Verifica,ps que la tarea le pertenece al usuario del token proporcionado 
    console.log("cambiando")
    const updatedProducto = await Producto.findOneAndReplace({sku: req.params.sku}, req.body, {new:true})
    res.status(200).json(updatedProducto)
    
})

//Elminia el producto que elegiste 
const deleteProducto = asyncHandler (async (req,res) => {
    const producto = await Producto.findOne({sku: req.params.sku})
    console.log(producto)
    if(!producto){
        res.status(404)
        throw new Error ('Producto no enconrtado')
    }
        await Producto.deleteOne(producto)
        //await Producto.deleteOne({sku: req.params.sku})
        res.status(200).json({sku: req.params.sku})
  
})

module.exports = {
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto
} 