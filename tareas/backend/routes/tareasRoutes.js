const express = require('express')
const router = express.Router()
const {getTareas, createTarea, updateTarea, deleteTarea} = require('../controllers/tareasController')

//Obtener tareas
router.get('/', getTareas)

//Crear tareas
router.post('/', createTarea)

// Modificar tarea
router.put('/:id', updateTarea)

//Eliminar tarea
router.delete('/:id', deleteTarea)
module.exports = router