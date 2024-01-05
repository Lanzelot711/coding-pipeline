import { useState, useEffect } from 'react';
import { fetchTasks, fetchTaskById, deleteTask, addTask } from '../utils/api';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      try {
        const tasksData = await fetchTasks();
        setTasks(tasksData);
        setError(null);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    loadTasks();
  }, []);

  const addNewTask = async (task) => {
    setLoading(true);
    try {
      const newTask = await addTask(task);
      setTasks([...tasks, newTask]);
      setError(null);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const getTask = async (taskId) => {
    setLoading(true);
    try {
      const task = await fetchTaskById(taskId);
      setLoading(false);
      return task;
    } catch (e) {
      setError(e);
      setLoading(false);
      return null;
    }
  };

  const removeTask = async (taskId) => {
    setLoading(true);
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
      setError(null);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  return {
    tasks,
    loading,
    error,
    addNewTask,
    getTask,
    removeTask,
  };
};