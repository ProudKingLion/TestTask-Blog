import $api from "../http";
import { AxiosResponse } from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', { login: login, password: password })
    }

    static async refresh(token: string): Promise<AxiosResponse<AuthResponse>> {
        console.log({ token: token })
        return $api.post<AuthResponse>('/auth/refresh', { token: token })
    }

    static async registration(name: string, login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', { name, login, password })
    }
}

