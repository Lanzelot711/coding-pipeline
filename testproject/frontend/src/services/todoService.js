import { apiConfig } from './apiConfig';

export async function getAllTodos() {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/todos`, {
      method: 'GET',
      headers: apiConfig.headers,
    });
    if (!response.ok) {
      throw new Error('Error fetching todos');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function getTodoById(todoId) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/todos/${todoId}`, {
      method: 'GET',
      headers: apiConfig.headers,
    });
    if (!response.ok) {
      throw new Error('Error fetching todo by ID');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function addTodo(todo) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/todos`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      throw new Error('Error adding new todo');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function deleteTodo(todoId) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/todos/${todoId}`, {
      method: 'DELETE',
      headers: apiConfig.headers,
    });
    if (!response.ok) {
      throw new Error('Error deleting todo');
    }
    return response.ok;
  } catch (error) {
    throw error;
  }
}