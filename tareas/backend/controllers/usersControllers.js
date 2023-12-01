const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt.js')
const asyncHandler = require('express')
const User = require('../models/userModel')

//registrar usuario 
const registrarUser = asyncHandler( async (req,res) => {
    //name, email, password
    //Desestructuramos
    const {name, email, password } = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error ('faltan datos, verificar')
    }
    //verificamos si existe el suario 
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('El usuario ya existe en la base de datos ')
    } else{
        //encriptar contraseña
    }

    res.status(201).json({message: "Usuario creado"})
})

//login de usuario 
const loginUser = asyncHandler(async (req,res) => {
    res.status(201).json({message: "Login Usuario"})
})
//datos del usuario 
const datosUser = asyncHandler(async (req,res) => {
    res.status(201).json({message: "Mis datos Usuario"})
})

module.exports = {
    registrarUser,
    loginUser,
    datosUser
}