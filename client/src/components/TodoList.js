import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onEdit, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-muted mt-4">Nothing here yet. Add your first todo!</p>;
  }

  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ListGroup>
  );
}

export default TodoList;
