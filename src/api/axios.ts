import axios, { AxiosHeaders } from "axios";
const baseURL = "https://movies-json-server.vercel.app/";
function api(headers?: AxiosHeaders) {
  const axiosInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: { ...headers },
  });
  // adding interceptors
  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      //TODO
      // handling error here
      return Promise.reject(error);
    }
  );
  return axiosInstance;
}
export default api;
