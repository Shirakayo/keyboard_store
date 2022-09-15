import axios from 'axios';

const $host = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_BASE_URL
})



$host.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers!.Authorization = `Bearer ${token}`
    return config
})

export {
    $host
}