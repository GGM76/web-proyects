import axios from 'axios'

const API_URL= 'http://localhost:500/api/productos'

//crear tarea
const crearTarea = async(tareaData,token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)
    
    return response.data
}

//tomar la lista de tareas
const getTareas = async(token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    
    return response.data
}

//borrar tarea
const deleteTarea = async(idtarea,token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + idtarea, config)
    
    return response.data
}

const tareaService ={
    crearTareas,
    getTarea,
    deleteTarea
}

export default tareaService