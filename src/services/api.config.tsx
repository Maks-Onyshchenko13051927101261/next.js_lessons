import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers:{}
});

const response = async <T,>(endpoint:string):Promise<T> => {
    const {data} = await axiosInstance.get<T>(endpoint);
    return data;
};

const createEndpoint = <T,>(endpoint: string) => ({
    getAll: () => response<T[]>(endpoint),
    getById: (id: string | number) => response<T>(`${endpoint}/${id}`),
});

export default createEndpoint;