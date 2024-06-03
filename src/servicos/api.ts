import axios from "axios";

const api = axios.create({
  baseURL: "http://10.91.131.85:3000"
})

export default api;