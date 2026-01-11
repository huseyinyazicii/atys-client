import axios from 'axios';
import useLoadingStore from '../../stores/useLoadingStore';

let activeRequests = 0;
let isInterceptorInitialized = false;

export const axiosInstance = axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL,
   timeout: 10000,
   headers: {
      'Content-Type': 'application/json',
   },
});

export function setupAxiosInterceptors() {
   if (isInterceptorInitialized) return;
   isInterceptorInitialized = true;

   axiosInstance.interceptors.request.use((config) => {
      activeRequests++;
      useLoadingStore.getState().show();

      console.log('Request made, activeRequests:', activeRequests);

      const token = localStorage.getItem('access_token');

      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
   });

   axiosInstance.interceptors.response.use(
      (response) => {
         activeRequests--;
         if (activeRequests === 0) {
            useLoadingStore.getState().hide();
         }

         return response;
      },
      (error) => {
         //   if (error.response?.status === 401) {
         //      // logout, redirect vs.
         //   }
         activeRequests--;
         if (activeRequests === 0) {
            useLoadingStore.getState().hide();
         }
         return Promise.reject(error);
      }
   );
}
