import { IUser } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";
import { debug } from "console";


export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        console.log(user)
        console.log("IN setUser")
        this.user = user;
        console.log(this.user.login)
    }

    getLogin() {
        console.log(this.user.login)
        return this.user.login;

    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(login: string, password: string) {
        try {
            // console.log(login, password)
            const response = await AuthService.login(login, password);
            console.log(response.data)
            localStorage.setItem("token", response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    // async checkAuth(login: string, token: string) {
    //     try {
    //         // console.log(login, password)
    //         const response = await AuthService.login(login, password);
    //         console.log(response)
    //         localStorage.setItem('token', response.data.token);
    //         this.setAuth(true);
    //         this.setUser(response.data.user);
    //     } catch (e: any) {
    //         console.log(e.response?.data?.message);
    //     }
    // }

    async registration(name: string, login: string, password: string) {
        try {
            const response = await AuthService.registration(name, login, password);
            console.log(response)
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            // const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async refresh() {
        this.setLoading(true);
        try {
            // const login = await this.getLogin();
            // debugger
            // console.log(login)
            // console.log("In checkAuth")
            const token = localStorage.getItem('token');
            if (!token) {
                this.setAuth(false);
                return false;
            }

            const response = await AuthService.refresh(token);
            console.log(response);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);

            // return true;
        } catch (e: any) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}
