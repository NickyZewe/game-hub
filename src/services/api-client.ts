import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse <T> {
    count: number;
    results: T[];
}


export const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '152215d46aba47d28c3cf6c190500e44'
    }
})

class APIClient <T>{
    endpoint: string;

    constructor(endpoint: string) {
            this.endpoint = endpoint;
        }

    getAll = (config: AxiosRequestConfig) => {
       return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
    }

}

export default APIClient;
