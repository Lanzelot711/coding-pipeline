import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // adjust this to the correct backend base URL

const apiService = {
  getTasks: function() {
    return axios.get(`${API_BASE_URL}/tasks`).then(response => response.data);
  },

  getTaskById: function(id) {
    return axios.get(`${API_BASE_URL}/tasks/${id}`).then(response => response.data);
  },

  addTask: function(task) {
    return axios.post(`${API_BASE_URL}/tasks`, task).then(response => response.data);
  },

  deleteTask: function(id) {
    return axios.delete(`${API_BASE_URL}/tasks/${id}`);
  }
};

export default apiService;