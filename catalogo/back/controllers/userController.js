const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
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
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        //crear el usuario 
        const user = await User.create({
            name,// es igual a name:name
            email,
            password: hashedPassword
        })
        if (user){
            res.status(201).json({
                _id:user._id,
                name: user.name,
                email: user.email,
                admin: user.esAdmin
            })
        }else{
            res.status(400)
            throw new Error ("No se pudo guardar el usuario")
        }
    }
})

//login de usuario 
const loginUser = asyncHandler(async (req,res) => {
    const {email,password} = req.body

    if(!email || !password){
        res.status(400)
        throw new Error ('faltan datos, favor de verificar')
    }

    const user = await User.findOne({email})
    
    if (user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id:user._id,
            name: user.name,
            email: user.email,
            admin: user.esAdmin,
            token: getToken(user._id)
        })    
    }else{
        res.status(400)
        throw new Error("credenciales incorrectar, verificar por favor")
    }
})

//datos del usuario 
const datosUser = asyncHandler(async (req,res) => {
    res.status(201).json(req.user)
})

//Generacion del json web token
const getToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}

module.exports = {
    registrarUser,
    loginUser,
    datosUser
}