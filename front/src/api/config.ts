import axios from 'axios';
const HOST : string | undefined = process.env.REACT_APP_API_URL
console.log("el hsot es ", HOST)
const apiClient = axios.create({
  baseURL: HOST, 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiClient;