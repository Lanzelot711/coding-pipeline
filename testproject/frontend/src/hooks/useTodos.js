import { useState, useEffect, useCallback } from 'react';
import { getAllTodos, addTodo, deleteTodo } from '../services/todoService';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTodos = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getAllTodos();
      setTodos(data);
      setError(null);
    } catch (e) {
      setError('Failed to fetch todos: ' + e.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const addNewTodo = useCallback(async (todo) => {
    try {
      const newTodo = await addTodo(todo);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (e) {
      setError('Failed to add todo: ' + e.message);
    }
  }, []);

  const removeTodo = useCallback(async (todoId) => {
    try {
      await deleteTodo(todoId);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== todoId));
    } catch (e) {
      setError('Failed to delete todo: ' + e.message);
    }
  }, []);

  return {
    todos,
    isLoading,
    error,
    fetchTodos,
    addNewTodo,
    removeTodo,
  };
}