import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks'; // Placeholder API URL

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];  // Return empty array in case of error
  }
}

export const fetchTaskById = async (taskId) => {
  try {
    const response = await axios.get(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching task with id ${taskId}:`, error);
    return null;  // Return null in case of error
  }
}

export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/${taskId}`);
    return response.data;  // Assuming the API returns some kind of confirmation
  } catch (error) {
    console.error(`Error deleting task with id ${taskId}:`, error);
    return null;  // Return null in case of error
  }
}

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error adding new task:', error);
    return null;  // Return null in case of error
  }
}