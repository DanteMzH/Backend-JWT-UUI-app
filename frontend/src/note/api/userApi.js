import axios from "axios";


const userApi = axios.create({
    baseURL: 'http://localhost:8080'
})

usersApi.interceptors.request.use( config =>{
    config.headers ={
        ...config.headers,
        'Authorization': sessionStorage.getItem('token'),
    }
}

)

export default userApi;