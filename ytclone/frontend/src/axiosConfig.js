import axios from 'axios';


const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', 
  withCredentials: true,
});
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn('Unauthorized. Redirect to login or clear token.');
     
    }
    return Promise.reject(error);
  }
);

export default API;
