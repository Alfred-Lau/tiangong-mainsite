import { RequestConfig } from 'umi';
import errorHandler from '@/utils/errorHandler';

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {
    adaptor: (resData) => {
      console.log('resData', resData);
      return {
        ...resData,
        success: resData.ok,
        errorMessage: resData.message,
      };
    },
  },
  errorHandler,
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [
    (response, options) => {
      console.log('response', response);
      response.headers.append('interceptors', 'yes yo');
      return response;
    },
  ],
};
