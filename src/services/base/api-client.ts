import type { BaseResponse } from '../../types/base/base-response.model';
import { axiosInstance } from './axios.instance';

export async function get<TResponse>(url: string): Promise<TResponse> {
   const response = await axiosInstance.get<BaseResponse<TResponse>>(url);

   if (!response.data.isSuccess) {
      throw new Error(response.data.message);
   }

   return response.data.data as TResponse;
}

export async function post<TResponse, TRequest>(url: string, body: TRequest): Promise<TResponse> {
   const response = await axiosInstance.post<BaseResponse<TResponse>>(url, body);

   if (!response.data.isSuccess) {
      throw new Error(response.data.message);
   }

   return response.data.data as TResponse;
}
