import axios from 'axios';
import { databaseURL } from './apiKey';

const instance = axios.create({
  baseURL: databaseURL
});

export default instance;