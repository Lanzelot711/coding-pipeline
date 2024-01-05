import React from 'react';
import { useTasks } from '../hooks/useTasks';

const TaskItem = ({ task, deleteTask }) => {
  const { removeTask } = useTasks();

  const handleDeleteClick = () => {
    removeTask(task._id);
  };

  return (
    <div>
      <p>{task.name}</p>
      <p>{new Date(task.deadline).toLocaleDateString()}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default TaskItem;