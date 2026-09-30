import React, { useState } from 'react';
import { ListGroup, Form, Button, Badge, Modal } from 'react-bootstrap';

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(todo._id);
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <>
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
          <Button size="sm" variant="outline-danger" onClick={handleDeleteClick}>
            Delete
          </Button>
        </div>
      </ListGroup.Item>

      {/* Delete Confirmation Modal */}
      <Modal show={showConfirm} onHide={cancelDelete} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title className="h5">Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this task? This cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoItem;
