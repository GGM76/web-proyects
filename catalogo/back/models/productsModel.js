const {Schema, model} = require('mongoose')

const ProductSchema = ({

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
        active:{
          type: Boolean,
          default: true
        },
      })

      ProductSchema.pre('save', async function(next) {
        if (!this.service) {
          const defaultService = await Service.findOne({ name: 'NORMAL' });
          console.log(defaultService)
          this.service = defaultService._id;
        }
        next();
      });


module.exports = model('Product', ProductSchema)