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

 router.get('/api/v1/pets/:id', (request, response) => {
    //console.log("Novia escogida", request.params)
    const onePet = petList.pets.find(pet => pet.id == request.params.id)// consigue una cosa en especifico 
    response.send(onePet)
 })


 module.exports = router
