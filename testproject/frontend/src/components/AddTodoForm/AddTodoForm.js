import React, { useState } from 'react';
import { addTodo } from '../../services/todoService';

function AddTodoForm() {
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !deadline) {
      setError('Please enter both name and deadline for the todo.');
      return;
    }

    try {
      setIsSubmitting(true);
      const todo = { name, deadline: new Date(deadline) };
      await addTodo(todo);
      // Reset the form on successful addition
      setName('');
      setDeadline('');
      // Ideally, this would trigger a refresh of the todo list in the parent component (TodoList)
      // which could be achieved either by lifting up state or using context or a state
      // management library. You might also want to navigate back to the list upon successful add.
    } catch (e) {
      setError(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Task Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          disabled={isSubmitting}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={isSubmitting}>Add Todo</button>
    </form>
  );
}

export default AddTodoForm;