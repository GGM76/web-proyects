const mongoose = require ('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true,"porfavor agregue nombre"]
    },
    email:{
        type:String,
        required:[true, "porfavor agrega un email"]
    },
    password:{
        type:String,
        required:[true,"agrega una contrasena"]
    },
    esAdmin:{
        type: Boolean,
        default: false
    },
},{
    timestamps: true
})

module.exports=mongoose.model('User',userSchema)

