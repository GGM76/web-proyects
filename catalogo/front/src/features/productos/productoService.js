import axios from 'axios';

const API_URL = 'http://localhost:5000/api/productos'
//const API_URL = 'https://faithful-rose-katydid.cyclic.app/api/tareas/'

//crear una tarea
const crearProducto = async (productoData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+ "/crear", productoData, config)
    return response.data
}

//obtener lista de tareas del usuario
const getProductos = async () => {//token) => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }
    const response = await axios.get(API_URL)//, config)
    return response.data
}
                           //(sku,token)        
const getOneProducto = async (sku,     ) => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }
    const response = await axios.get(API_URL + "/" + sku)//, config)
    return response.data
}

//borrar una tarea
const deleteProducto = async (sku, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + "/" + sku, config)

    return response.data
}

//Modificar tarea
const putProducto = async (productoUpdate, token) =>{
    console.log("SERVICE" + productoUpdate)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + `/${productoUpdate.sku}/modificar`, productoUpdate, config)

    return response.data
}

const productoService = {
    crearProducto,
    getOneProducto,
    getProductos,
    deleteProducto,
    putProducto
}

export default productoService