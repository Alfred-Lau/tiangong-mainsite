import { request, RequestConfig } from 'umi';

const DOMAIN =
  process.env.NODE_ENV === 'prod' ? 'http://139.129.44.2:8082/' : '';

export default (url: string, options?: RequestConfig) => {
  return request(`${DOMAIN}${url}`, options);
};
