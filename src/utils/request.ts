import { request, RequestConfig } from 'umi';

const DOMAIN =
  process.env.NODE_ENV === 'prod' ? 'http://139.129.44.2:8082/' : '';

const OPEN_API_DOMAIN =
  process.env.NODE_ENV === 'prod'
    ? 'http://api.lazy-minus-your-intelligence.com/'
    : 'http://localhost:7002';

export default (url: string, options?: RequestConfig) => {
  return request(`${DOMAIN}${url}`, options);
};

export function requestOpenAPI(url: string, options?: RequestConfig) {
  return request(`${OPEN_API_DOMAIN}${url}`, options);
}
