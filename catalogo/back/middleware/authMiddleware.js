//Constantes para hcer la seguridad de la api 
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async(req,res,next)=>{
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token=req.headers.authorization.split(' ')[1]
            //verificamos el token o firma del token 
            const decoded=jwt.verify(token,process.env.JWT_SECRET)  
            //obtenemos datos del usuario          
            req.user=await User.findById(decoded.id).select('-password')

            next()
            
    } catch(error){
        console.log(error)
        res.status(401)
        throw new Error('Acceso no autorizado')
    }}

    if(!token){
        res.status(400)
        throw new Error('Acceso no autorizado, no se proporciono ningun token')
    }
})

module.exports = { protect }