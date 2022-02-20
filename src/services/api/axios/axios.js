import axios from "axios";
import Cookies from "js-cookie";

// HELP
// http://nestjs-boilerplate-test.herokuapp.com/docs/#/
const axiosInstance = axios.create({
    baseURL: "http://nestjs-boilerplate-test.herokuapp.com/api"
})

axiosInstance.interceptors.request.use(config => {
    const authToken = localStorage.getItem('accessToken')
    if(authToken) {
        config.headers.authorization = `Bearer ${authToken}`
    }
    return config
}, error => Promise.reject(error))

export default axiosInstance