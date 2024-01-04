import React from 'react';

function Task({ task, onDelete }) {
  return (
    <li>
      <span>{task.name} - {task.deadline}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default Task;