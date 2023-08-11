import router from "@/router";
import axios, { AxiosError, AxiosHeaders } from "axios";
const baseURL = import.meta.env.VITE_APP_BASE_URL;

function api(headers?: AxiosHeaders) {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
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
    function (error: AxiosError) {
      //TODO
      // handling error here
      if (error.response) {
        if (error.response.status >= 500) {
          /// server error
          router.push({ name: "server-down" });
        }
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
}
export default api;
