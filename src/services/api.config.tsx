import { CarModel } from "@/models/CarModel";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_CARS_API_URL;
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {}
});

const carServices = {
    getAllCars: async () => {
        const axiosResponse = await axiosInstance.get<CarModel[]>("/cars");
        return axiosResponse.data;
    }
}

export default carServices;