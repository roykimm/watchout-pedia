import { useQuery } from 'react-query';
import { onTheAirApi } from '../../../apis/tvapi';
import { AxiosError, AxiosResponse } from "axios";
import { ListResponse, TVDetail } from "../../../types";

const useOnTheAirTv = () => {
    return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError >('onTheAirTv', onTheAirApi);
}

export default useOnTheAirTv;