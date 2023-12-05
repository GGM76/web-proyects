const asyncHandler = require('express-async-handler')
const Tarea = require('../models/treaModel')


const getTareas = asyncHandler (async (req,res) => {
    const tareas = await Tarea.find({user: req.user._id})
    res.status(200).json(tareas)    
})

const createTarea = asyncHandler (async (req,res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error('No escrbiste una descripcion')
    }
    const tarea = await Tarea.create({
        texto: req.body.texto,
        user: req.user._id
    })
    res.status(201).json(tarea)        
})

const updateTarea = asyncHandler (async (req,res) => {
    const tarea = await Tarea.findById(req.params.id)
    if(!tarea){
        res.status(404)
        throw new Error ('tarea no enconrtada')
    }

    //Verifica,ps que la tarea le pertenece al usuario del token proporcionado 
    if(tarea.user.toString() !== req.user._id){
        res.status(401)
        throw new Error('Acceso no autorizado')
    }else{
    const updatedTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedTarea)
    }
})

const deleteTarea = asyncHandler (async (req,res) => {
    const tarea = await Tarea.findById(req.params.id)
    if(!tarea){
        res.status(404)
        throw new Error ('tarea no enconrtada')
    }
    if(tarea.user.toString() !== req.user._id){
        res.status(401)
        throw new Error('Acceso no autorizado')
    }else{
        await Tarea.deleteOne(tarea)
        res.status(200).json({id: req.params.id})
    }
  
})

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}