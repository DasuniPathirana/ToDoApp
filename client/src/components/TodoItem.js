import React, { useState } from 'react';
import { ListGroup, Form, Button, Modal } from 'react-bootstrap';

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
          <h6 className="mb-1 todo-title fw-bold">
            {todo.title}
            {todo.done && <span className="highlight-green ms-2" style={{fontSize: '0.8rem'}}>Done</span>}
          </h6>
          {todo.description && (
            <p className="mb-0 todo-desc">
              {todo.description}
            </p>
          )}
        </div>

        <div className="d-flex gap-2">
          <Button size="sm" className="btn-custom-secondary" onClick={() => onEdit(todo)}>
            Edit
          </Button>
          <Button size="sm" className="btn-custom-danger" onClick={handleDeleteClick}>
            Delete
          </Button>
        </div>
      </ListGroup.Item>

      <Modal show={showConfirm} onHide={cancelDelete} centered size="sm">
        <Modal.Header closeButton style={{ borderBottom: '2px solid #ece4d8', backgroundColor: '#fffcf7' }}>
          <Modal.Title className="planner-title h4">Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#fffcf7', fontFamily: 'Nunito' }}>
          Are you sure you want to delete this task?
        </Modal.Body>
        <Modal.Footer style={{ borderTop: '2px solid #ece4d8', backgroundColor: '#fffcf7' }}>
          <Button className="btn-custom-secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button className="btn-custom-danger" onClick={confirmDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoItem;
