const {Router} = require('express')
//crear el controlador para utilizar su configuracion 
const {
    createProduct,
    readProduct, 
    updateProduct, 
    deleteProduct} = require('../controllers/productsController')

const { celebrateValidator } = require("../middlewares/celebrateValidator");
const { validateToken } = require("../middlewares/jwtValidator")

const router = Router();

router.post("/", validateToken("cambiame-por-algo-seguro"), celebrateValidator, createProduct)          //C Create
router.get("/", readProduct)           //R read
router.put("/:productId", updateProduct)    //U Update
router.delete("/:productId", deleteProduct) //D Delete

module.exports = router