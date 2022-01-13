import { useQuery } from 'react-query';
import { popularApi } from '../../../apis/tvapi';
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const usePopularTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError >('popularTv', popularApi);
}

export default usePopularTv;