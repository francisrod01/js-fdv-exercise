import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL,
});

const apis = {
  loadUsers: () => api.get('users'),
  getUser: id => api.get(`users/${id}`),
  addItem: user => api.post('users', user),
  editItem: user => api.put(`users/${user.id}`, user),
  deleteItem: id => api.delete(`users/${id}`),
};

export default apis;
