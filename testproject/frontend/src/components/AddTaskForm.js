import React, { useState } from 'react';
import { useTasks } from '../hooks/useTasks';

const AddTaskForm = () => {
  const { addNewTask } = useTasks();
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!taskName || !deadline) {
      alert('Please fill in all fields.');
      return;
    }
    await addNewTask({ name: taskName, deadline });
    setTaskName('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;