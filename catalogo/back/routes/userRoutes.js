//archivo para las rutas de usuario 
//constantes de dependencias
const express = require('express')
const router = express.Router()//Funcion para poder hacer las rutas y usarlas
//constantes de los controladores los cuales van a poder usar las rutas y usaran los datos 
const {registrarUser,loginUser,datosUser} = require('../controllers/userController')
// usa el middleware que protege los datos y que usamos para obtenerlos
const { protect } = require('../middleware/authMiddleware') 
//rutas para poder ir a los link de carga 
router.post('/',registrarUser)
router.post('/login',loginUser)
router.get('/datos', protect, datosUser)


module.exports = router