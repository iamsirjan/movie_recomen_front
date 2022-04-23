
import axios from 'axios'
export const sendUserDetails = (options) => {
  return axios.post('http://127.0.0.1:8000/users/register', options);
};


export const getUserDetails = (options) => {
  return axios.get('http://127.0.0.1:8000/users/register', options);
};
