const express = require('express')
const router = express.Router()
// Se puede usar asi pero no es recomendable usarlo asi 


router.patch('api/v1/cakes/:cakeId', (request, response) => {
    const {cakeId } = request.params
    if(cakeId > 100 ){
    response.status(401).send({
        message: 'El pastel esta feo'
    })
    }else {
        const mensaje = {
            id: `El id del paste es ${cakeId}`
        }
        response.status(207).send(mensaje)
        return
    }
    response.send(cakeId)
})

module.export = router