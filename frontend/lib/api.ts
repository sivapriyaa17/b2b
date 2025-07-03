import axios from 'axios';
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://b2b-044s.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },});

export default api;


api.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});



