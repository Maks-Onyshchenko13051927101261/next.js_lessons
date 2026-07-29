import { ICarModel } from "@/models/CarModel";
import { axiosInstance } from "./api";

const carServices = {
    getAllCars: async () => {
        const axiosResponse = await axiosInstance.get<ICarModel[]>("/cars");
        return axiosResponse.data;
    },
    getById: async (id: string) => {
        const axiosResponse = await axiosInstance.get<ICarModel>(`/cars/${id}`);
        return axiosResponse.data.id;
    },
    addCar: async (car: ICarModel) => {
        await axiosInstance.post("/cars", car);
    }
};

export default carServices;