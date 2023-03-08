import axios from 'axios'

const serviceBlog = axios.create({
    baseURL: 'http://localhost:8000/api/'
    // baseURL: 'http://localhost:4000/api'
});

//Configuracion de los intersectores

serviceBlog.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });
  
  export default serviceBlog;