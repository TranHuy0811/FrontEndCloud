import { useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:7979/cloud", // Replace with your API base URL
});

export { axiosInstance};