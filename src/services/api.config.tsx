import { ICarModel } from "@/models/CarModel";
import { axiosInstance } from "./api";

const carServices = {
    getAllCars: async () => {
        const axiosResponse = await axiosInstance.get<ICarModel[]>("/cars");
        return axiosResponse.data;
    }
}

export default carServices;