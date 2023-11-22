const {response, request} = require ( 'express' )
const Product = require('../models/productsModel')

const createProduct = async (req = request, res = response) => {
    try{
        const { body } = req;
        const product = new Product(body)
        await product.save()
        res.status(201).json({
          product
        })
      }catch(error){
        res.status(500).json({
          msg:"Algo Ocurrio al crear un producto",
          error
        })
      }

    const readProduct = async(req = request, res = response) => {
        try {
          const { limit = 25 } = req.query
          const queryParam = {active:true}
          const recordLength = await Product.countDocuments()
          const product = await Product.find(queryParam).limit(Number(limit)).populate("service");
          res.json({
            recordLength,
            product
          })
        } catch (error) {
          res.status(500).json({
            msg:"Algo Ocurrio al leer los productos",
            error
          })  
        }
      }

      const updateProduct = async(req = request, res) => {
        try {
          const { params, body } = req;
          const { productId } = params;
      
          await Product.findByIdAndUpdate(productId, body )
          const productToShow = await Product.findById(productId)
      
          res.status(202).json({
            msg:"Los Productos se modificaron con éxito",
            productToShow
          })
        } catch (error) {
          res.status(500).json({
            msg:"Algo Ocurrio al modificar el registro",
            error
          })  
        }
      }

      const deleteProduct = async(req = request, res = response) =>{
        try {
          const { productId } = req.params;
          const deleteState = {"active": false}
      
          await Product.findByIdAndUpdate( productId, deleteState );
          const productToShow = await Product.findById( productId )
      
          res.status(202).json({
            msg:"Se Borro el registro",
            productToShow
          })
        } catch (error) {
          res.status(500).json({
            msg:"Algo Ocurrio al Eliminar el registro",
            error
          })  
        }
      }

      module.exports = {
        createProduct,
        readProduct,
        updateProduct,
        deleteProduct
      } 
}