import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/'
//const API_URL = 'https://faithful-rose-katydid.cyclic.app/api/users/'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    return response.data
}

const authService = {
    register
}

export default authService