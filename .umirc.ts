import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  favicon: 'https://lazy-minus-your-intelligence.com/favicon.ico',
  title: '天工工程体系主站',
});
