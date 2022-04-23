import axios from 'axios'

export const getRatingApi = (options) => {
    return axios.get('http://127.0.0.1:8000/users/rating/', options);
  };
  
  export const sendRatingApi = (options) => {
    return axios.post('http://127.0.0.1:8000/users/rating/', options);
  };
  
