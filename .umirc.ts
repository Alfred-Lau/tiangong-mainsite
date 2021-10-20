import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  favicon:
    'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/favicon.ico',
  title: '天工工程体系主站',
  proxy,
  scripts: [
    `
    document.write(unescape("%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280463264' type='text/javascript'%3E%3C/script%3E"));
    `,
    `
    document.body.removeChild(document.querySelector('a[title="站长统计"]'))
    `,
  ],
});
