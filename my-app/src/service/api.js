import axios from 'axios';

const api = axios.create({
   baseURL: 'https://rocky-stream-89814.herokuapp.com'
});

export default api;