import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDelete, onRefresh }) {
  return (
    <div>
      <button onClick={onRefresh}>Refresh Tasks</button>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;