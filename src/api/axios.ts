import axios, { AxiosHeaders } from "axios";
const baseURL = "http://localhost:3000";
function api(headers?: AxiosHeaders) {
  const axiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: { ...headers },
  });

  return axiosInstance;
}
export default api;
