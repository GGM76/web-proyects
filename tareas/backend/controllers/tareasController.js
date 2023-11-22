
const getTareas = (req,res) => {
    res.status(200).json({message:"Tareas"})    
}

const createTarea = (req,res) => {
    res.status(201).json({message:"Tarea creada"})        
}

const updateTarea = (req,res) => {
    res.status(200).json({message:`Tarea modificada ${req.params.id}`})
}

const deleteTarea = (req,res) => {
    res.status(200).json({message:`Tarea eliminada ${req.params.id}`})
}

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}