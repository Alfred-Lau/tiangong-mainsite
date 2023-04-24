import { request, RequestConfig } from 'umi';
import jscookie from 'js-cookie';

export const DOMAIN =
  process.env.NODE_ENV === 'production'
    ? 'https://lazy-minus-your-intelligence.com'
    : 'http://localhost:3000';

// const OPEN_API_DOMAIN = 'https://lazy-minus-your-intelligence.com';
const OPEN_API_DOMAIN =
  process.env.NODE_ENV !== 'development' ? '' : 'http://localhost:7001';

export default (url: string, options?: RequestConfig) => {
  const token = jscookie.get('authorization');

  return request(`${DOMAIN}${url}`, {
    ...options,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export function requestOpenAPI(url: string, options?: RequestConfig) {
  const token = jscookie.get('authorization');

  const realURL = url.replace('/api', '/openapi');
  return request(`${OPEN_API_DOMAIN}${realURL}`, {
    ...options,
    headers: {
      ...options?.headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
