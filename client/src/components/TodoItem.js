import React from 'react';
import { ListGroup, Form, Button, Badge } from 'react-bootstrap';

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  return (
    <ListGroup.Item
      className={'d-flex align-items-start gap-3 py-3 todo-item todo-enter' + (todo.done ? ' todo-done' : '')}
    >
      <Form.Check
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo._id)}
        className="mt-1"
      />

      <div className="flex-grow-1">
        <h6 className="mb-1 todo-title">
          {todo.title}
          {todo.done && <Badge bg="success" className="ms-2">Done</Badge>}
        </h6>
        {todo.description && (
          <p className="mb-0 text-muted small todo-desc">
            {todo.description}
          </p>
        )}
      </div>

      <div className="d-flex gap-1">
        <Button size="sm" variant="outline-primary" onClick={() => onEdit(todo)}>
          Edit
        </Button>
        <Button size="sm" variant="outline-danger" onClick={() => onDelete(todo._id)}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default TodoItem;
