import Axios from '../axios';
import axios from 'axios'
export const postDetailsApi = (options) => {
  return Axios.post('users/movies/', options);
};

export const getDetailsApi = (options) => {
  return axios.get('http://127.0.0.1:8000/users/get-movies/', options);
};



export const getRecommendApi = (options) => {
  return axios.post('http://127.0.0.1:8000/users/recommender/', options);
};