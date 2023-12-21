//Archivo con la funcion de los end points 

//Obtiene todos los productos que se hacen 
const getProductos = (req,res) =>{
    res.status(200).json({message:'Obtencion de productos'})
}

//Crea el producto que hagas
const createProducto = (req,res) => {
    res.status(201).json({message:'Producto creado'})
}
//Modifica el producto que elegiste 
const updateProducto = (req,res) => {
    res.status(200).json({message:`Modificacion de ${req.params.sku}`})
}
//Elminia el producto que elegiste 
const deleteProducto = (req,res) => {
    res.status(200).json({message:`Eliminacion de producto ${req.params.sku}`})
}
module.exports = {
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto
} 