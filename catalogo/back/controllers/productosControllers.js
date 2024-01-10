//Archivo con la funcion de los end points 
const asyncHandler = require('express-async-handler')
const Producto = require('../models/productModel')

//Obtiene todos los productos que se hacen 
const getProductos = asyncHandler (async (req,res) => {
    const productos = await Producto.find({user: req.user._id})
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
        ML: req.body.ML,
        A: req.body.A,
        Titulo: req.body.titulo,
        Descripcion: req.body.descripcion,
        Variante: req.body.variante,
        HEX: req.body.hex,
        user: req.user._id
    })
    res.status(201).json(producto)        
})
//Modifica el producto que elegiste 
const updateProducto = asyncHandler(async (req,res) => {
    const producto = await Producto.findById(req.params.id)
    if(!producto){
        res.status(404)
        throw new Error ('producto no enconrtado')
    }

    //Verifica,ps que la tarea le pertenece al usuario del token proporcionado 
    if(producto.user.toString() !== req.user._id){
        res.status(401)
        throw new Error('Acceso no autorizado')
    }else{
    const updatedProducto = await Producto.findByIdAndUpdate(req.params.sku, req.sku, {new:true})
    res.status(200).json(updatedProducto)
    }
})
//Elminia el producto que elegiste 
const deleteProducto = asyncHandler (async (req,res) => {
    const producto = await Producto.findById(req.params.sku)
    if(!producto){
        res.status(404)
        throw new Error ('Producto no enconrtado')
    }
    if(producto.user.toString() !== req.user._id){
        res.status(401)
        throw new Error('Acceso no autorizado')
    }else{
        await Producto.deleteOne(producto)
        res.status(200).json({sku: req.params.sku})
    }
  
})
module.exports = {
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto
} 