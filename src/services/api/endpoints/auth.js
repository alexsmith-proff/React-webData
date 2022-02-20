import axiosInstance from "../axios/axios"

const endpoints = {
    registration: (data) => axiosInstance.post("/v1/auth/email/register", data),
    login: (data) => axiosInstance.post("/v1/auth/email/login", data),
    forgotPassword: (data) => axiosInstance.post("/v1/auth/forgot/password", data),
    getProfile: (data) => axiosInstance.get("/v1/auth/me", data),
    updateProfile: (data) => axiosInstance.patch("/v1/auth/me", data),
}

export default endpoints