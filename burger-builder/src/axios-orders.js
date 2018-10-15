import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-builder-61c02.firebaseio.com'
});

export default instance;