import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers:{}
});

const response = <T,>(endpoint:string) => async():Promise<T[]> => {
    const axiosResponse = await axiosInstance.get<T[]>(endpoint);
    return axiosResponse.data;
};

export default response;