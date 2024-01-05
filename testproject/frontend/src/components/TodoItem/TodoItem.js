import React from 'react';
import PropTypes from 'prop-types';
import { deleteTodo } from '../../services/todoService';

function TodoItem({ todo }) {
  const { _id, name, deadline } = todo;

  const handleDelete = async () => {
    try {
      await deleteTodo(_id);
      // Ideally, trigger a state update in the parent component (TodoList)
      // to re-fetch the todos from the server or remove the deleted item
      // from the local state to update the UI. This requires lifting state up
      // or using a state management library like Redux or context.
      // This code assumes such a mechanism is in place and calls a prop method
      // `onDelete` which should be passed down from the parent.
      // onDelete(_id); // Uncomment when onDelete prop is available
    } catch (error) {
      console.error(error);
      // Handle deletion error (e.g., show a notification to the user)
    }
  };

  return (
    <li>
      <span>{name} - {deadline.toLocaleDateString()}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    deadline: PropTypes.instanceOf(Date).isRequired
  }).isRequired,
  // onDelete: PropTypes.func.isRequired // Uncomment when onDelete prop is available
};

export default TodoItem;