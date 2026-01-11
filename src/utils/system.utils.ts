import axios from 'axios';

function getApiErrorMessage(error: unknown): string {
   if (axios.isAxiosError(error)) {
      return error.response?.data?.message || error.message || 'Beklenmeyen bir hata oluştu';
   }

   if (error instanceof Error) {
      return error.message;
   }

   return 'Beklenmeyen bir hata oluştu';
}

const SystemUtils = {
   getApiErrorMessage,
};

export default SystemUtils;
