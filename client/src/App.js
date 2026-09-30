import React, { useState, useEffect } from 'react';
import { Container, Alert, Spinner } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodos, createTodo, updateTodo, toggleDone, deleteTodo } from './api/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await getTodos();
      setTodos(res.data);
      setError('');
    } catch (err) {
      setError('Could not load todos. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (data) => {
    try {
      const res = await createTodo(data);
      setTodos((prev) => [res.data, ...prev]);
      setError('');
    } catch (err) {
      setError('Could not add that todo. Give it another shot.');
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      const res = await updateTodo(id, data);
      setTodos((prev) => prev.map((t) => (t._id === id ? res.data : t)));
      setEditingTodo(null);
      setError('');
    } catch (err) {
      setError('Could not save those changes. Try again.');
    }
  };

  const handleToggle = async (id) => {
    const snapshot = todos;
    setTodos((prev) => prev.map((t) => (t._id === id ? { ...t, done: !t.done } : t)));
    try {
      await toggleDone(id);
    } catch (err) {
      setTodos(snapshot);
      setError('Could not update that todo.');
    }
  };

  const handleDelete = async (id) => {
    const snapshot = todos;
    setTodos((prev) => prev.filter((t) => t._id !== id));
    try {
      await deleteTodo(id);
    } catch (err) {
      setTodos(snapshot);
      setError('Could not delete that todo. Try again.');
    }
  };

  return (
    <Container className="py-4" style={{ maxWidth: '700px' }}>
      <h2 className="text-center mb-4">My Todos</h2>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      <TodoForm
        onSubmit={editingTodo ? (data) => handleUpdate(editingTodo._id, data) : handleCreate}
        editingTodo={editingTodo}
        onCancel={() => setEditingTodo(null)}
      />

      {loading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      ) : (
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onEdit={setEditingTodo}
          onDelete={handleDelete}
        />
      )}
    </Container>
  );
}

export default App;
