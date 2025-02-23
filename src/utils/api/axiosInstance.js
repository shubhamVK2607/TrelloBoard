import axios from "axios";

const BASE_URL=import.meta.env.VITE_API_BASE_URL

export const axiosClient = axios.create({
    baseURL: BASE_URL, 
    timeout: 4000,
    headers: {
      'Content-Type': 'application/json',
    },
  });