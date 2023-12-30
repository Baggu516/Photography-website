import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5000/home/',
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  export default instance