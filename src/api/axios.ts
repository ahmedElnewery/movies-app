import axios, { AxiosHeaders } from "axios";
const baseURL = import.meta.env.VITE_APP_BASE_URL;

function api(headers?: AxiosHeaders) {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
  // adding interceptors
  axiosInstance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
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
