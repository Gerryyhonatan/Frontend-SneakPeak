import instance from "@/libs/axios/instance";
import endpoint from "./endpoint.constant";
import { ILogin, IRegister } from "@/types/Auth";

const authServices = {
    register: (payload: IRegister) => instance.post(`${endpoint.AUTH}/register`, payload),
    verifyOtp: (payload: { email: string; otp: string }) => instance.post(`${endpoint.AUTH}/verify-otp`, payload),
    login: (payload: ILogin) => instance.post(`${endpoint.AUTH}/login`, payload),
    getProfileWithToken: (token: string) => instance.get(`${endpoint.AUTH}/me`, { 
        headers: { 
            Authorization: `Bearer ${token}` 
        } 
    }),
    loginGoogle: (payload: { token: string}) => instance.post(`${endpoint.AUTH}/login-google`, payload),
};

export default authServices;