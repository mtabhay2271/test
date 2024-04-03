import axios from 'axios';

const axiosInstance = axios.create({ baseURL:"http://localhost:7000/api" });

let authToken = sessionStorage.getItem('token');
axiosInstance.interceptors.request.use(async req => {
    if (!authToken) {
        authToken = sessionStorage.getItem('token');
    }
    req.headers.Authorization = authToken
    return req;
});

axiosInstance.interceptors.response.use(
    async (response) => {

        return response;
    },
    (error) => {
        console.log('error', error?.response?.data?.message);
        return Promise.reject((error.response && error.response.data) || 'Something went wrong')
    }
);

export default axiosInstance;
