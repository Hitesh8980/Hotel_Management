import api from './api';

// Get all pantry staff
export const getPantryStaff = async () => {
  try {
    const response = await api.get('/pantry');
    return response.data;
  } catch (error) {
    console.error("Error fetching pantry staff:", error);
    throw error; // Optional: You can return an error message if required
  }
};

// Add new pantry staff
export const addPantryStaff = async (staffData) => {
  try {
    const response = await api.post('/pantry', staffData);
    return response.data;
  } catch (error) {
    console.error("Error adding pantry staff:", error);
    throw error; // Optional: You can return an error message if required
  }
};

// Update pantry staff details
export const updatePantryStaff = async (id, staffData) => {
  try {
    const response = await api.put(`/pantry/${id}`, staffData);
    return response.data;
  } catch (error) {
    console.error("Error updating pantry staff:", error);
    throw error; // Optional: You can return an error message if required
  }
};

// Delete pantry staff
export const deletePantryStaff = async (id) => {
  try {
    const response = await api.delete(`/pantry/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting pantry staff:", error);
    throw error; // Optional: You can return an error message if required
  }
};
