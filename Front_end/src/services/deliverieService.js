import api from './api';

// Get all deliveries
export const getDeliveries = async () => {
  try {
    const response = await api.get('/deliveries');
    return response.data;
  } catch (error) {
    console.error("Error fetching deliveries:", error);
    throw error;
  }
};

// Add a new delivery
export const addDelivery = async (deliveryData) => {
  try {
    const response = await api.post('/deliveries', deliveryData);
    return response.data;
  } catch (error) {
    console.error("Error adding delivery:", error);
    throw error;
  }
};

// Update a delivery
export const updateDelivery = async (id, deliveryData) => {
  try {
    const response = await api.put(`/deliveries/${id}`, deliveryData);
    return response.data;
  } catch (error) {
    console.error("Error updating delivery:", error);
    throw error;
  }
};

// Delete a delivery
export const deleteDelivery = async (id) => {
  try {
    const response = await api.delete(`/deliveries/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting delivery:", error);
    throw error;
  }
};
