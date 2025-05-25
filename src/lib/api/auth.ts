import client from './client';

const login = ({ username, password }) =>
  client.post('/api/auth/login', {
    username,
    password
  });

const register = ({ username, password }) =>
  client.post('/api/auth/register', {
    username,
    password
  });

const check = () => client.get('/api/auth/check');

const logout = () => client.post('/api/auth/logout');

export { login, register, check, logout };
