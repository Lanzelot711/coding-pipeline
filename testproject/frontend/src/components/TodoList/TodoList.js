import React, { useState, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { getAllTodos } from '../../services/todoService';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const data = await getAllTodos();
        setTodos(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (isLoading) {
    return <div>Loading todos...</div>;
  }

  if (error) {
    return <div>Error fetching todos: {error}</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      {todos.length > 0 ? (
        <ul>
          {todos.map(todo => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </ul>
      ) : (
        <div>No todos found.</div>
      )}
    </div>
  );
}

export default TodoList;