import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_CARS_API_URL;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json"
  }
});