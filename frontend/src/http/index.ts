import axios, { AxiosRequestConfig } from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";

// export const API_URL = `http://127.1.1.0:7100/`
export const API_URL = `http://5.100.99.105:7100/`


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            // localStorage.removeItem('token');
            // const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            // localStorage.setItem('token', response.data.token);
            // return $api.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export default $api;
