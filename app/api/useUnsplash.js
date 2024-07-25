import { getPhotosByQuery } from "./unsplash";
import { useQuery } from "react-query";

const staleTime = 1000 * 60 * 60 * 2;

export const useGetPhotosByQuery = ({ query }) =>
    useQuery(query, () => getPhotosByQuery({ query }), {
        staleTime,
    });
