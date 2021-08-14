import { defineConfig } from 'umi';
import routes from './routes';
import proxyMap from './proxy';
type ENV = 'dev' | 'test' | 'pre' | 'prod';
const NODE_ENV = process.env.NODE_ENV as ENV;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  favicon:
    'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/favicon.ico',
  title: '天工工程体系主站',
  proxy: proxyMap[NODE_ENV || 'dev'],
});
