import api from './api';

// Login API
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

// Register API (if needed for admins or staff)
export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};
