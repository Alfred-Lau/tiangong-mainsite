import { defineConfig } from 'umi';
import { GenerateSW } from 'workbox-webpack-plugin';
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: ['@tiangongkit/lib'],
  },
  routes,
  fastRefresh: {},
  favicon:
    'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/favicon.ico',
  title: '烽火彼岸的网络空间',
  proxy,
  headScripts: [
    `https://tiangong-tracert.oss-cn-beijing.aliyuncs.com/tiangong-sdk.umd.js`,
    'https://www.googleoptimize.com/optimize.js?id=OPT-NDQTHH7'
  ],

  /*

  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-122849311-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-122849311-1');
</script>


  */
  scripts: [
    `
    document.write(unescape("%3Cscript src='https://s9.cnzz.com/z_stat.php?id=1280463003&web_id=1280463003' type='text/javascript'%3E%3C/script%3E"));
    `,
    `
    document.body.removeChild(document.querySelector('a[title="站长统计"]'))
    `,
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-122849311-1',
      async: true,
    },
    `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-122849311-1');
    `,
  ],
  metas: [
    {
      name: 'keywords',
      content: '工程化, 天工, 烽烟彼岸，网络空间，个人主站',
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
  chainWebpack(memo) {
    // workbox 配置
    memo.plugin('workbox').use(GenerateSW, [
      {
        cacheId: 'webpack-pwa', // 设置前缀
        skipWaiting: true, // 强制等待中的 Service Worker 被激活
        clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
        cleanupOutdatedCaches: true, //删除过时、老版本的缓存
        swDest: 'service-wroker.js', // 输出 Service worker 文件
        include: ['**/*.{html,js,css,png.jpg}'], // 匹配的文件
        exclude: ['service-wroker.js'], // 忽略的文件
        runtimeCaching: [
          {
            urlPattern: /.*\.js.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'seed-js',
              expiration: {
                maxEntries: 20, //最多缓存20个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: /.*css.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'seed-css',
              expiration: {
                maxEntries: 30, //最多缓存30个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: /.*(png|svga).*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'seed-image',
              expiration: {
                maxEntries: 30, //最多缓存30个，超过的按照LRU原则删除
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
    ]);
  },
});
