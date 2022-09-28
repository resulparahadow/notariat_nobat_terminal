import axios from 'axios'

const BASE_URL = "http://95.85.120.218:8181/";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 60000,

    headers: {
        'Content-Type': 'application/json',
        'Accept': "*/*",
    }
})
export { axiosInstance } 