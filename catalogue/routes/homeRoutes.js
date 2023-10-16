const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController.js')

// Si la ruta es /homes, entonces se ejecuta el controlador homeController.createHome

router.post('/vmingo', homeController.createHome)
router.get('/vmingo', homeController.findAllHomes)
router.get('/vmingo/:ml', homeController.findOneHome)
router.patch('/vmingo/:sku', homeController.updateOneHome)
router.delete('/vmingo/:sku', homeController.softDeleteOneHome)
router.delete('/vmingo/destroy/:sku', homeController.destroyOneHome)

module.exports = router
