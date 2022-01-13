import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { searchApi } from '../../apis/movieApi';
import { ListResponse, Movie } from '../../types';

const useMovieSearch = (query:string) => {
    return useQuery<AxiosResponse<ListResponse<Movie>>>(['searchMovie', query], () => searchApi(query), {enabled : Boolean(query)});
}

export default useMovieSearch;