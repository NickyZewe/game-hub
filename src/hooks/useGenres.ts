import {  useQuery } from "react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


// const useGenres = () => ({ data: genres, isLoading: false, error: null})

const useGenres = () => useQuery ({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 60 * 60 * 24 * 1000,
    initialData: { count: genres.length, results: genres, next: null },
})

export default useGenres;