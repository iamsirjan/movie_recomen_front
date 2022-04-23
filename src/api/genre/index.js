import axios from 'axios'

export const getGenreApi = (options) => {
    return axios.get('http://127.0.0.1:8000/users/genre/', options);
  };
  
  export const getLanguageApi = (options) => {
    return axios.get('http://127.0.0.1:8000/users/language/', options);
  };
  