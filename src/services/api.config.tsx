import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers:{}
});

const response = <T,>(endpoint:string) => async():Promise<T> => {
    const axiosResponse = await axiosInstance.get<T>(endpoint);
    return axiosResponse.data;
};

const createEndpoint = <T,>(endpoint:string) => ({
    getAll: response<T[]>(endpoint),
    getById: (id: string) => response<T>(`${endpoint}/${id}`),
});

export default createEndpoint;