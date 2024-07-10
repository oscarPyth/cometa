import axios from 'axios';
const HOST : string | undefined = "http://ec2-54-87-170-124.compute-1.amazonaws.com"
console.log("el hsot es ", HOST)
const apiClient = axios.create({
  baseURL: HOST, 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default apiClient;