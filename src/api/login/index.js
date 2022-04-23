import Axios from '../axios';

export const getToken = (options) => {
  return Axios.post('users/token', { ...options });
};
export const getAccessToken = (options) => {
  return Axios.post('/users/token', {
    ...options,
  });
};
export const getCurrentUser = (options) => {
  return Axios.get('/users/me', options);
};
