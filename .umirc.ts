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
  headScripts: [
    `https://tiangong-tracert.oss-cn-beijing.aliyuncs.com/tiangong-sdk.umd.js`,
  ],
  scripts: [
    `
    document.write(unescape("%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1280463264' type='text/javascript'%3E%3C/script%3E"));
    `,
    `
    document.body.removeChild(document.querySelector('a[title="站长统计"]'))
    `,
  ],
  metas: [
    {
      name: 'keywords',
      content: '工程化, 天工, 烽烟彼岸',
    },
    {
      name: 'description',
      content: '完善的前端工程化体系，包含脚手架，监控，后台，搭建，组件库等',
    },
    {
      property: 'og:title',
      content: '烽火彼岸，黄金海滩',
    },
    {
      property: 'og:description',
      content: '完善的前端工程化体系，包含脚手架，监控，后台，搭建，组件库等',
    },
    {
      property: 'og:image',
      content:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/favicon.ico',
    },
  ],
});
