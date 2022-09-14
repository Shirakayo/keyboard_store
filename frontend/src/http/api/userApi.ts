import {$host} from "../index";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../../types/Login/Login-types";

export const registration = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return await $host.post('user/registration', {email, password})
}

export const login = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return await $host.post('user/login', {email, password})
}

export const logout = async (): Promise<void> => {
    return await $host.post('user/logout')
}

export const auth = async () => {
    return await $host.get('user/auth')
}