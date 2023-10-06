const express = require('express');
//Router es objeto para crear rutas en la api 
const router = express.Router();
 // Creacion de rutas 
 const petList = {
    "pets" : [
        {
            "id" : 1,
            "name" : "Mizuhara",
            "type" : "Top S",
            "age" : 20,
        },
        {
            "id" : 2,
            "name" : "Mami",
            "type" : "Top A",
            "age" : 21,
        },
        {
            "id" : 3,
            "name" : "Ruka",
            "type" : "Top A",
            "age" : 18,
        },
        {
            "id" : 4,
            "name" : "Sumi",
            "type" : "Top B",
            "age" : 19,
        },
    ]
 }

 router.get('/api/v1/pets', (request, response) => {
    response.send(petList)
 })


 module.exports = router
