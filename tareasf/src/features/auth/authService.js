import axios from 'axios'

const API_URL = 'localhost/api/user/'

//resgitrar un usuario 
const register = async(userData) => {
    const response = await axios.post(API_URL,userData)
    return response.data
}

const authService = {
    register
}

export default authService