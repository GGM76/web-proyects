const asyncHandler = require('express-async-handler')
const Tarea = require('../models/treaModel')


const getTareas = asyncHandler (async (req,res) => {
    const tareas = await Tarea.find()
    res.status(200).json(tareas)    
})

const createTarea = asyncHandler (async (req,res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error('No escrbiste una descripcion')
    }
    const tarea = await Tarea.create({
        texto: req.body.texto,
    })
    res.status(201).json(tarea)        
})

const updateTarea = asyncHandler (async (req,res) => {
    res.status(200).json({message:`Tarea modificada ${req.params.id}`})
})

const deleteTarea = asyncHandler (async (req,res) => {
    res.status(200).json({message:`Tarea eliminada ${req.params.id}`})
})

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}