import { useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Replace with your API base URL
});

export { axiosInstance};