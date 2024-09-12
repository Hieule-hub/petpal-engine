import axios from "axios";

// DEBUG
const isDebug = process.env.NODE_ENV !== "production";
const baseUrl = process.env.API_URL || "/api";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    headers: { "Content-Type": "application/json" }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        if (isDebug) {
            // can output log here
        }

        // Do something before the request is sent
        const token = localStorage.getItem("authToken"); // Retrieve auth token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        // Handle the error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        // Do something with the response data
        if (isDebug) {
            // can output log here
            console.log("Response:", response);
        }

        return response;
    },
    function (error) {
        // Handle the response error
        if (error.response && error.response.status === 401) {
            // Handle unauthorized error
            console.error("Unauthorized, logging out...");
            // Perform any logout actions or redirect to login page
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
