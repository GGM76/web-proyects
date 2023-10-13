const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController.js')

// Si la ruta es /homes, entonces se ejecuta el controlador homeController.createHome

router.post('/vmingo', homeController.createHome)
router.get('/vmingo', homeController.findAllHomes)
router.get('/vmingo/:houseId', homeController.findOneHome)
router.patch('/vmingo/:houseId', homeController.updateOneHome)
router.delete('/vmingo/:houseId', homeController.softDeleteOneHome)
router.delete('/vmingo/destroy/:houseId', homeController.destroyOneHome)

module.exports = router
