import axiosInstance from "@/libs/axiosInstance";

export const AuthService = {
    login: () => axiosInstance.post("/login"),
    getUser: () => axiosInstance.get("/user")
};
