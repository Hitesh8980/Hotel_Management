import api from './api';

// Get all diet charts
export const getDietCharts = async () => {
  try {
    const response = await api.get('/diet-Charts');
    return response.data;
  } catch (error) {
    console.error("Error fetching diet charts:", error);
    throw error; 
  }
};

// Add a new diet chart
export const addDietChart = async (dietChartData) => {
  try {
    const response = await api.post('/diet-Charts', dietChartData);
    return response.data;
  } catch (error) {
    console.error("Error adding diet chart:", error);
    throw error; 
  }
};

// Update a diet chart
export const updateDietChart = async (id, dietChartData) => {
  try {
    const response = await api.put(`/diet-Charts/${id}`, dietChartData);
    return response.data;
  } catch (error) {
    console.error("Error updating diet chart:", error);
    throw error;  
  }
};

// Delete a diet chart
export const deleteDietChart = async (id) => {
  try {
    const response = await api.delete(`/diet-Charts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting diet chart:", error);
    throw error;  
  }
};
