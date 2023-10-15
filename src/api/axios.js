import axios from 'axios';

export default axios.create({
  baseURL: 'https://endpoint.inventroapp.com/api/',
});
