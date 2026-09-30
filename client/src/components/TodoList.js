import React from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, onEdit, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="planner-card text-center py-5 mt-4">
        <h4 className="planner-title text-muted mb-0">Nothing here yet. Add your first todo!</h4>
      </div>
    );
  }

  return (
    <div className="todo-list-container mt-4">
      <ListGroup variant="flush">
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
    </div>
  );
}

export default TodoList;
