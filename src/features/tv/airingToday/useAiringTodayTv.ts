import { useQuery } from 'react-query';
import { airingTodayApi } from '../../../apis/tvapi';
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useAiringTodayTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError >('airingTodayTv', airingTodayApi);
}

export default useAiringTodayTv;