import {$host} from "../index";

export const registration = async (email: string, password: string) => {
    debugger
    return await $host.post('user/registration', {email, password})
}

export const login = async (email: string, password: string) => {
    return await $host.post('user/login', {email, password})
}

export const logout = async () => {
    return await $host.post('user/logout')
}

export const auth = async () => {
    return await $host.get('user/auth')
}