import React, { useCallback, useState } from 'react';
import MediaQuery from 'react-responsive';
import { MIN_WIDTH } from '@/constants/varibles';
import styles from './index.less';
import Layer from '@/components/Layer';
import FlipCard from '@/components/FlipCard';
import ReflectCard from '@/components/ReflectCard';
import TimeLine from '@/components/Timeline';
import List from '@/components/List';
import useAsyncEffect from '@/hooks/useAsyncEffect';
import { queryWorks } from '@/services/Works';
import { queryBlogs } from '@/services/Blog';

function AboutMeComponent() {
  return (
    <div className={styles.aboutme}>
      <div className={styles.left}>
        <img
          src="https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/bg.jpg"
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.slogan}>ABOUT ME</div>
        <div className={styles.short}>
          本人网名烽火彼岸，生于塞上，游学于迤逦之乡，定居于人间天堂
        </div>
        <div className={styles.long}>
          『自强不息，止于至善』『红专并进，理实交融』这些朴实凝萃的校训流淌我身，四年本科生涯、三年研究生涯，良师益友收获颇多~
          前有软工查软件系统之宏著、后学信安观程序于微，科班出身，愿工程改变世界，更喜洞悉真知~
          扎根杭城，累哉累哉，自知其中快乐~
        </div>
        <div className={styles.section}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <span className={styles.label}>旧版:</span>
              <a
                href="https://old.lazy-minus-your-intelligence.com/"
                className={styles.href}
              >
                old.lazy-minus-your-intelligence.com/
              </a>
            </li>
            <li className={styles.item}>
              <span className={styles.label}>专栏:</span>
              <a
                href="https://juejin.im/user/57fd0345816dfa0056cf086d"
                className={styles.href}
              >
                juejin.im/user/57fd0345816dfa0056cf086d
              </a>
            </li>
            <li className={styles.item}>
              <span className={styles.label}>项目:</span>
              <a href="https://github.com/Alfred-Lau" className={styles.href}>
                https://github.com/Alfred-Lau
              </a>
            </li>
            <li className={styles.item}>
              <span className={styles.label}>公众号:</span>
              <a href="" className={styles.href}>
                烽火彼岸
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PieceWorkComponent() {
  const [works, setWorks] = React.useState<MainSiteApi.WorkPiece[]>([]);

  useAsyncEffect(async () => {
    const { data } = await queryWorks();

    setWorks(data?.list);
  }, []);

  return (
    <div className={styles.piecework}>
      {works.map((card) => {
        return (
          <FlipCard
            key={card.id}
            title={card.title}
            desc={card.desc}
            tags={card.tags}
            link={card.link}
            cover={card.cover}
            website={card.website}
          />
        );
      })}
    </div>
  );
}

function EngineeredToolComponent() {
  const cards = [
    {
      id: 13,
      title: 'Vscode emmet 定制扩展',
      link: 'https://github.com/Alfred-Lau/emmit',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/zcy-emmet.png',
      desc: 'VS Code 扩展，支持简单的代码片段',
      tech_stack: { vscode: 'latest' },
      tags: [],
    },

    {
      id: 10,
      title: 'mirror',
      link: 'https://github.com/Alfred-Lau/mirror',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/mirror.png',
      desc: 'emmet 的升级版本，支持通过命令行生成模板页面',
      tech_stack: { cli: 'latest', node: 'latest' },
      tags: [],
    },
    {
      id: 12,
      title: '@cli/core',
      link: 'https://github.com/Alfred-Lau/cli_core_codebase',
      desc: 'mirror 的再升级，作为核心类为命令行工具和 GUI 工具提供项目全流程支持 ',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/cli-core.png',
      tech_stack: { node: 'latest', cli: '' },
      tags: [],
    },
    {
      id: 11,
      title: '天工',
      link: 'https://github.com/Alfred-Lau/TianGong',
      desc: '个人效率神器，Electron，套路大全',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/placeholder.png',
      tech_stack: { node: 'latest', electron: '9.x.x', vue: 'latest' },
      tags: [],
    },
    {
      id: 7,
      title: 'TS 重写 Axios',
      link: 'https://github.com/Alfred-Lau/ts-axios',
      desc: '此处是个轮子',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/placeholder.png',
      tech_stack: { typescript: 'latest' },
      tags: [],
    },
    {
      id: 8,
      title: 'vue-mooker',
      link: 'https://github.com/Alfred-Lau/vue-mocker-testcase',
      desc: 'Vue 的 mock 插件，首期支持接口测试功能',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/mofcker.png',
      tech_stack: { vue: 'latest' },
      tags: [],
    },
    {
      id: 9,
      title: '模板引擎',
      link: 'https://github.com/Alfred-Lau/fast-template-engine',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/template-engine.png',
      desc: '基于 es6 字符串实现模板引擎',
      tech_stack: { node: 'latest', cli: '' },
      tags: [],
    },
  ];

  return (
    <div className={styles.engineeredtool}>
      {cards.map((card) => {
        return (
          <ReflectCard
            title={card.title}
            desc={card.desc}
            tags={card.tags}
            link={card.link}
            cover={card.cover}
            key={card.id}
          />
        );
      })}
    </div>
  );
}

function ExperienceComponent() {
  const timelines = [
    {
      id: 0,
      title: '厦门大学',
      duration: '2009-09 至 2013-09',
      content: '自强不息，止于至善',
      tag: '',
    },
    {
      id: 1,
      title: '中科大',
      duration: '2014-09 至 2017-09',
      content: '红专并进，理实交融',
      tag: '',
    },
    {
      id: 2,
      title: '政采云有限公司',
      duration: '2018-02 至 2020-07',
      content: `
      - 业务上从事支付和项目采购，商品协议相关开发工作
      - 技术建设进行影响力建设和工程化相关的产出，主要包括:
        - 前端对外小报全链路【包括前后端，运维部署，React SSR，定时任务，命令行数据提取工具等】
        - 移动端脚手架【落地于移动端开发】
        - 命令行脚手架【落地于小组内使用】
        - 以及基于其上的 GUI 工具【后续交由他人维护】`,
      tag: '工作',
    },
    {
      id: 3,
      title: '蚂蚁集团 - 体验技术部',
      duration: '2020-07 至 2020-11',
      content: '基于集团自研node全栈框架，投入ob 官网业务研发',
      tag: '',
    },
    {
      id: 4,
      title: '蚂蚁集团 - OceanBase',
      duration: '2020-11 至今',
      content: '负责大官网团队 & 服务交付',
      tag: '',
    },
  ];
  return (
    <div>
      <TimeLine timelines={timelines} />
    </div>
  );
}

function BlogComponent() {
  const [blogs, setBlogs] = React.useState<MainSiteApi.BlogItem[]>([]);
  const pageSize = 5;
  const [pageNo, setPageNo] = React.useState(1);

  useAsyncEffect(async () => {
    const blogs = await queryBlogs({ pageNo, pageSize });
    setBlogs(blogs);
  }, []);

  const loadMore = async () => {
    const more = await queryBlogs({ pageNo: pageNo + 1, pageSize });
    setPageNo(pageNo + 1);
    setBlogs(blogs.concat(more));
  };
  return (
    <div>
      <List data={blogs} showMore handleLoadMore={loadMore} />
    </div>
  );
}

function TianGongComponent() {
  const tiangongdevs = [
    {
      id: 1,
      title: '工具库',
      desc: '天工体系工具库，支持框架和业务开发的常用工具函数，正则表达式，dom操作，ts 类型等',
      tags: ['tool', 'single'],
      link: 'https://github.com/Alfred-Lau/tiangong-lib',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/iShot2022-02-20%2014.13.20.png',
    },
    {
      id: 4,
      title: '采集二方SDK',
      desc: '',
      tags: ['monorepo', 'pnpm'],
      link: 'https://github.com/Alfred-Lau/tiangong-tracert',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86.png',
    },
    {
      id: 5,
      title: '解决方案全栈框架',
      desc: '',
      tags: ['egg', 'umi', 'solution'],
      link: 'https://github.com/Alfred-Lau/tiangong-guanwnag-fullstack',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/iShot2022-02-20%2014.14.56.png',
    },
    {
      id: 2,
      title: '脚手架',
      desc: `概述 :作为天工体系贯穿始终的工具基座，采用插件式开发架构，CS 架构  ## 提供能力 ### 项目管理 ### git 管理能力 ### 本地 & 服务端构建发布能力 ### 其他 `,
      tags: ['plugins', 'cs arch'],
      link: 'https://github.com/Alfred-Lau/tiangong-cli',
      website: 'http://docs.lazy-minus-your-intelligence.com/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/%E5%A4%A9%E5%B7%A5%E4%BD%93%E7%B3%BB%E5%85%A8%E5%9F%9F%E6%8A%80%E6%9C%AF%E6%9E%B6%E6%9E%84%E5%9B%BE.png',
    },
    {
      id: 3,
      title: '搭建平台',
      desc: '',
      tags: ['vue', 'react preparing'],
      link: 'https://github.com/Alfred-Lau/tiangong-build-platform',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/%E6%90%AD%E5%BB%BA%E5%B9%B3%E5%8F%B0.png',
      website: 'http://build.lazy-minus-your-intelligence.com/',
    },
    {
      id: 6,
      title: '组件库',
      desc: '',
      tags: ['basic', 'biz', 'css transform'],
      link: 'https://github.com/Alfred-Lau/tiangong-component-react',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/iShot2022-02-20%2014.26.32.png',
      website: 'http://react.lazy-minus-your-intelligence.com/',
    },
    {
      id: 7,
      title: 'OpenAPI',
      desc: '提供官网全栈框架的各种能力的输出和集成',
      tags: ['server', 'private', 'socket'],
      link: 'https://github.com/Alfred-Lau/tiangong-server-ts',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/placeholder.png',
    },
    {
      id: 8,
      title: '服务端',
      desc: '',
      tags: ['api', 'database', 'cache'],
      link: 'https://github.com/Alfred-Lau/tiangong-server',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/placeholder.png',
    },
    {
      id: 9,
      title: '请求库',
      desc: '',
      tags: ['typescript'],
      link: 'https://github.com/Alfred-Lau/tiangong-request',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/placeholder.png',
    },
  ];
  return (
    <div className={styles.architecture}>
      {tiangongdevs.map((card) => {
        return (
          <FlipCard
            title={card.title}
            desc={card.desc}
            tags={card.tags}
            link={card.link}
            cover={card.cover}
            key={card.id}
            website={card.website}
          />
        );
      })}
    </div>
  );
}

const CONTENT_ARRAY = [
  {
    sort: 1,
    title: 'INFORMATION',
    subtitle: 'ABOUT ME',
    component: AboutMeComponent,
    anchor: 'about',
  },
  {
    sort: 2,
    title: 'TianGong',
    subtitle: 'ENGINEERED SOLUTION',
    component: TianGongComponent,
    anchor: 'tiangong',
  },
  {
    sort: 3,
    title: 'PIECEWORK',
    subtitle: 'SPARE TIME PROJECT',
    component: PieceWorkComponent,
    anchor: 'projects',
  },
  {
    sort: 4,
    title: 'Design',
    subtitle: 'Design Page',
    component: DesignPage,
    anchor: 'design',
  },
  {
    sort: 5,
    title: 'TOOL',
    subtitle: 'ENGINEERED TOOL',
    component: EngineeredToolComponent,
    anchor: 'tools',
  },
  {
    sort: 6,
    title: 'EXPERIENCE',
    subtitle: 'MY EXPERIENCE',
    component: ExperienceComponent,
    anchor: 'experience',
  },
  {
    sort: 7,
    title: 'BLOG',
    subtitle: 'LATEST BLOG',
    component: BlogComponent,
    anchor: 'rethink',
  },
];

function DesignPage() {
  const designs = [
    {
      id: 0,
      title: '响应式设计',
      desc: '设计特点：；实现特点：；体系优化方向',
      tags: ['h5', 'responsive'],
      link: 'https://lazy-minus-your-intelligence.com/copycat/responsive',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/iShot2022-03-11%2000.13.58.png',
    },
    {
      id: 1,
      title: '旅行行业',
      desc: '设计特点：；实现特点：；体系优化方向',
      tags: ['layout', 'circle'],
      link: 'https://lazy-minus-your-intelligence.com/copycat/travel',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/travel.png',
    },
    {
      id: 4,
      title: '电商行业',
      desc: '设计特点：；实现特点：；体系优化方向',
      tags: ['search', 'seo'],
      link: null,
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/iShot2022-02-20%2014.54.20.png',
    },
    {
      id: 5,
      title: '视频站点',
      desc: '设计特点：；实现特点：；体系优化方向',
      tags: ['live', 'share', 'popup'],
      link: null,
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/iShot2022-02-20%2014.54.20.png',
    },
    {
      id: 2,
      title: '社交站点',
      desc: `设计特点：；实现特点：；体系优化方向`,
      tags: ['socket', 'h5'],
      link: null,
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/iShot2022-02-20%2014.54.20.png',
    },
    {
      id: 3,
      title: '新闻站点',
      desc: '设计特点：；实现特点：；体系优化方向',
      tags: ['cache'],
      link: null,
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/iShot2022-02-20%2014.54.20.png',
    },
    {
      id: 6,
      title: 'Dashboard',
      desc: '设计特点：；实现特点：；体系优化方向',
      tags: ['api', 'chart'],
      link: null,
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/iShot2022-02-20%2014.54.20.png',
    },
    {
      id: 7,
      title: '数据应用',
      desc: '设计特点：；实现特点：；体系优化方向',
      tags: ['dada', 'admin'],
      link: null,
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/articles_assets/iShot2022-02-20%2014.54.20.png',
    },
  ];
  return (
    <div className={styles.architecture}>
      {designs.map((card) => {
        return (
          <FlipCard
            title={card.title}
            desc={card.desc}
            tags={card.tags}
            link={card.link}
            cover={card.cover}
            key={card.id}
            website={card.website}
          />
        );
      })}
    </div>
  );
}

function Content() {
  return (
    <div className={styles.content}>
      {CONTENT_ARRAY.map(function (content) {
        return (
          <Layer
            title={content.title}
            subtitle={content.subtitle}
            key={content.sort}
            anchor={content.anchor}
          >
            <content.component></content.component>
          </Layer>
        );
      })}

      <MediaQuery minWidth={MIN_WIDTH}>
        <footer className={styles.contentFooter}>
          ©2020 - 现在 烽火彼岸 | Alfred-Lau All rights reserved
        </footer>
      </MediaQuery>
      <MediaQuery maxWidth={MIN_WIDTH}>
        <footer className={styles.contentFooter}>
          ©2020 - 现在 烽火彼岸 <br /> Alfred-Lau All rights reserved
        </footer>
      </MediaQuery>
    </div>
  );
}

export default Content;
