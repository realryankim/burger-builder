import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burer-3ce3b-default-rtdb.firebaseio.com/',
});

export default instance;
