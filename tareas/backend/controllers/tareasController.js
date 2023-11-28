
const getTareas = async (req,res) => {
    res.status(200).json({message:"Tareas"})    
}

const createTarea = async (req,res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error('No escrbiste una descripcion')
    }
    res.status(201).json({message:"Tarea creada"})        
}

const updateTarea = async (req,res) => {
    res.status(200).json({message:`Tarea modificada ${req.params.id}`})
}

const deleteTarea = async (req,res) => {
    res.status(200).json({message:`Tarea eliminada ${req.params.id}`})
}

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}