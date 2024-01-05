import React from 'react';
import { useTasks } from '../hooks/useTasks';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks, removeTask, loading, error } = useTasks();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading tasks</div>;

  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} deleteTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;