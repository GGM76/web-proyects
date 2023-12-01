const express = require('express')
const router = express.Router()
const {registrarUser,loginUser,datosUse} = require('../controllers/usersControllers')

router.post('/',registrarUser)
router.post('/login',loginUser)
router.get('/datos',datosUse)


module.exports = router