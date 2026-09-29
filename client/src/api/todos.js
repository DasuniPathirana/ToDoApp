import axios from 'axios';

const API = 'http://localhost:5000/api/todos';

export const getTodos = () => axios.get(API);
export const createTodo = (data) => axios.post(API, data);
export const updateTodo = (id, data) => axios.put(API + '/' + id, data);
export const toggleDone = (id) => axios.patch(API + '/' + id + '/done');
export const deleteTodo = (id) => axios.delete(API + '/' + id);
