import { useQuery } from "react-query";
import Platform from "../entities/Platform";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery ({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 60 * 60 * 24 * 1000,
})


export default usePlatforms;