import React from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import Layout from '../components/Layout';

const TodoPage = () => {
  return (
    <Layout>
      <AddTaskForm />
      <TaskList />
    </Layout>
  );
};

export default TodoPage;