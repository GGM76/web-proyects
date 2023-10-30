const { respond, request } = require('express')

const createUser = (req = request, res = respond) => {
    res.json({
        msg: "Hola desde el controler file"
        })
}

const readUser = (req = request, res = respond) => {
    res.json({
        msg: "Lector de usuarios"
        })
}

const updateUser = (req = request, res = respond) => {
    res.json({
        msg: "Modificacion de usuarios"
        })
}

const deleteUser = (req = request, res = respond) => {
    res.json({
        msg: "Borrar usuario"
        })
}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}