import axios from 'axios'

export const api = axios.create({
    baseURL: "https://6405ae1ceed195a99f89363f.mockapi.io/api"
})

const errorHandler = (error) => {
    const statusCode = error.response?.status;
    if (statusCode && statusCode !== 401) {
        console.error("Error, ", error);
    } else {
        console.error("Not authorized, ", error);
    }
    return Promise.reject(error);
}

api.interceptors.response.use(undefined, error => {
    return errorHandler(error);
})