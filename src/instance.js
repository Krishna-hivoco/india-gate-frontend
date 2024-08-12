// axiosInstance.js

import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "http://api.indiagategrainsofhope.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
