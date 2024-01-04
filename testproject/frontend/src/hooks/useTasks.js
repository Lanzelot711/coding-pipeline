import { useState, useEffect } from 'react';
import apiService from '../services/apiService';

function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    refreshTasks();
  }, []);

  const refreshTasks = () => {
    apiService.getTasks()
      .then(setTasks)
      .catch(error => console.error("Error fetching tasks:", error));
  };

  const addTask = (task) => {
    apiService.addTask(task)
      .then(newTask => setTasks([...tasks, newTask]))
      .catch(error => console.error("Error adding task:", error));
  };

  const deleteTask = (id) => {
    apiService.deleteTask(id)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(error => console.error("Error deleting task:", error));
  };

  return {
    tasks,
    addTask,
    deleteTask,
    refreshTasks
  };
}

export default useTasks;