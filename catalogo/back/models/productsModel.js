const mongoose = require('mongoose')
const sharp = require('sharp');

const productSchema = mongoose.Schema({

        SKU:{
          type:String,
          required: [true, "El sku es requerido"],
          unique:true 
        },
        title:{
          type:String,
          required: [true, "El titulo es requerido"], 
        },
        description:{
            type:String,
            required: [true, "La descripcion es requerida"], 
        },
        hex: {
          type: String,
        },
        mercado: {
          type: String,
          required: [true, "El codigo ML es requerido "], 
          unique: true
        },
        amazon: {
            type: String,
            required: [true, "El codigo AMAZON es requerido "], 
            unique: true
          },
        image: {
          //data: Buffer,
          //contentType: String  
          type: Buffer
        },
        active:{
          type: Boolean,
          default: true
        },
      },{
        timestamp: true
      })

  module.exports = moongose.model('Product', productSchema)