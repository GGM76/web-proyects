//registrar usuario 
const registrarUser = (req,res) => {
    res.status(201).json({message: "Usuario creado"})
}
//login de usuario 
const loginUser = (req,res) => {
    res.status(201).json({message: "Login Usuario"})
}
//datos del usuario 
const datosUser = (req,res) => {
    res.status(201).json({message: "Mis datos Usuario"})
}

module.exports = {
    registrarUser,
    loginUser,
    datosUser
}