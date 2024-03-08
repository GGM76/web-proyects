//Archivo con la funcion de los end points 
const asyncHandler = require('express-async-handler')
const Producto = require('../models/productModel')

//Obtiene todos los productos que se hacen 
const getProductos = asyncHandler (async (req,res) => {
    const productos = await Producto.find()
    res.status(200).json(productos) 
})

const getOneProducto = asyncHandler (async (req,res) => {
    const producto = await Producto.findOne({sku: req.params.sku})
    if(!producto){
        res.status(404)
        throw new Error ('producto no enconrtado')
    }
    //Verifica,ps que la tarea le pertenece al usuario del token proporcionado 
    //console.log("cambiando")
    //const updatedProducto = await Producto.findOneAndReplace({sku: req.params.sku}, req.body, {new:true})
    res.status(200).json(producto)

})

//Crea el producto que hagas
const createProducto = asyncHandler (async (req,res) => {
    console.log("Paso en el creador de productos" + JSON.stringify(req.body))
    // console.log("Paso en el creador de productos" + JSON.stringify(req.body.imagenes))
    // revisa si hay algo escrito en el sku 
    if(!req.body.sku){
        res.status(400)
        throw new Error('No escrbiste un sku')
    }
    //crea la constante para el producto 
    //console.log("este es el req imagen  " + req.body.imagenes)
    //const urls = [].concat(req.body.imagenes)
    const producto = await Producto.create({
    //const producto = await Producto.insertOne({
        sku: req.body.sku,
        ML: req.body.ml,
        A: req.body.a,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        variante: req.body.variante,
        portada: req.body.portada,
        embalar: req.body.embalar,
        embalado: req.body.embalado
        //imagenes: req.file ? req.file.filename : req.body.imagen
        //imagenes: () => imagenes.push(req.body.imagen)
    })
    //console.log("esta es la imagen producto  " + producto.imagenes)
    // console.log("Termino de guardado" + JSON.stringify(producto))
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
    //console.log("cambiando")
    const updatedProducto = await Producto.findOneAndReplace({sku: req.params.sku}, req.body, {new:true})
    res.status(200).json(updatedProducto)
    
})

//Elminia el producto que elegiste 
const deleteProducto = asyncHandler (async (req,res) => {
    const producto = await Producto.findOne({sku: req.params.sku})
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
    getOneProducto,
    createProducto,
    updateProducto,
    deleteProducto
} 