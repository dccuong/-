import axios from "axios";

const axiosPermanent = axios.create({
  baseURL: "https://api.dev.bkplus.tech/ringtone/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "privatekey"
  },
});

export const axiosServer = axios.create({
  baseURL: "https://api.dev.bkplus.tech/ringtone/",
  headers: {
    
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "privatekey"
  },
});

axiosServer.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a request interceptor
axiosPermanent.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosPermanent.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosPermanent;