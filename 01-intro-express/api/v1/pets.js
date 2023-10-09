const express = require('express');
//Router es objeto para crear rutas en la api 
const router = express.Router();
 // Creacion de rutas 
 const petList = {
    "pets" : [
        {
            "id" : 1,
            "name" : "Mizuhara",
            "type" : "S",
            "age" : 20,
        },
        {
            "id" : 2,
            "name" : "Mami",
            "type" : "A",
            "age" : 21,
        },
        {
            "id" : 3,
            "name" : "Ruka",
            "type" : "A",
            "age" : 18,
        },
        {
            "id" : 4,
            "name" : "Sumi",
            "type" : "B",
            "age" : 19,
        },
    ]
 }

 //Query params: URL/api/v1/pets?busquedas
 router.get('/api/v1/pets', (request, response) => {
    //response.send(petList)
    console.log('Query de pets', request.query)
    const { age, type} = request.query
    if(!age && !type){ 
        response.status(200).send(petList)
        return
    }
    const filteredPets = petList.pets.filter(pet => {
        return pet.age == age || pet.type == type
    })
    response.status(200).send(filteredPets)
    return
 })

 router.get('/api/v1/pets/:id', (request, response) => {
    //console.log("Novia escogida", request.params)
    const onePet = petList.pets.find(pet => pet.id == request.params.id)// consigue una cosa en especifico 
    onePet ? response.status(200).send(onePet) : response.status(404).send({
        message: 'Kanojo Mitsukarimasen'
    })

 })


 module.exports = router
