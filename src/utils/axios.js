import axios from 'axios'
import { getToken } from './getToken';

const BASE_URL = "http://10.20.20.77:8095/";
// const BASE_URL = 'http://95.85.120.218:8282/api/v2';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 60000,

    headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Authorization': `Bearer ${getToken()}`
    }
})
export { axiosInstance } 