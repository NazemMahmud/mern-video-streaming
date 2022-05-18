import {guestInstance as axios, authInstance as authAxios} from "../../utility/axios";

export const login = async data => {
    // REMINDER: no need to receive id, it will be in token
    return axios.post('/auth/login', data);
}


export const registration = data => {
    return axios.post('/auth/register', data);
}

export const logout = async () => {
    return authAxios.post('/auth/logout');
}
