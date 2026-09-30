import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function TodoForm({ onSubmit, editingTodo, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
    setValidated(false);
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (!title.trim()) return;

    onSubmit({ title: title.trim(), description: description.trim() });

    if (!editingTodo) {
      setTitle('');
      setDescription('');
      setValidated(false);
    }
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isInvalid={validated && !title.trim()}
              maxLength={100}
            />
            <Form.Control.Feedback type="invalid">
              Title can't be empty.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description (optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Any extra details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={300}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button type="submit" variant={editingTodo ? 'success' : 'primary'}>
              {editingTodo ? 'Save Changes' : 'Add Todo'}
            </Button>
            {editingTodo && (
              <Button variant="outline-secondary" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TodoForm;
