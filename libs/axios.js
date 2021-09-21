import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
  timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
