const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {getTareas, createTarea, updateTarea, deleteTarea} = require('../controllers/tareasController')

//Obtener tareas
router.get('/', protect, getTareas)

//Crear tareas
router.post('/', protect ,createTarea)

// Modificar tarea
router.put('/:id',protect, updateTarea)

//Eliminar tarea
router.delete('/:id',protect, deleteTarea)
module.exports = router