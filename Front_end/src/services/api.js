import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for adding Authorization header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;  
  }
  return config;
});

// Function to fetch dashboard stats
export const getDashboardStats = async () => {
  try {
    const response = await api.get('/dashboard/stats'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
};

export default api;
