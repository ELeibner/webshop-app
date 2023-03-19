import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const apiBase = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
    },
    withCredentials: true
});

export const API = {
    getProducts: function getProducts() {
        return apiBase.get('/products').then((res) => res.data);
    }
};
