import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, deadline });
    setName('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskName">Task Name:</label>
        <input
          id="taskName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="taskDeadline">Deadline:</label>
        <input
          id="taskDeadline"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;