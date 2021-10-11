import React from 'react';
import MediaQuery from 'react-responsive';
import { MIN_WIDTH } from '@/constants/varibles';
import styles from './index.less';
import Layer from '@/components/Layer';
import FlipCard from '@/components/FlipCard';
import ReflectCard from '@/components/ReflectCard';
import TimeLine from '@/components/Timeline';
// import type { Timeline } from '@/components/TimeLine';
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
    const works = await queryWorks();
    console.log('works', works);

    setWorks(works);
  }, []);

  return (
    <div className={styles.piecework}>
      {works.map((card) => {
        return (
          <FlipCard
            title={card.title}
            desc={card.desc}
            tags={card.tags}
            link={card.link}
            cover={card.cover}
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
    },

    {
      id: 10,
      title: 'mirror',
      link: 'https://github.com/Alfred-Lau/mirror',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/mirror.png',
      desc: 'emmet 的升级版本，支持通过命令行生成模板页面',
      tech_stack: { cli: 'latest', node: 'latest' },
    },
    {
      id: 12,
      title: '@cli/core',
      link: 'https://github.com/Alfred-Lau/cli_core_codebase',
      desc: 'mirror 的再升级，作为核心类为命令行工具和 GUI 工具提供项目全流程支持 ',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/cli-core.png',
      tech_stack: { node: 'latest', cli: '' },
    },
    {
      id: 11,
      title: '天工',
      link: 'https://github.com/Alfred-Lau/TianGong',
      desc: '个人效率神器，Electron，套路大全',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/placeholder.png',
      tech_stack: { node: 'latest', electron: '9.x.x', vue: 'latest' },
    },
    {
      id: 7,
      title: 'TS 重写 Axios',
      link: 'https://github.com/Alfred-Lau/ts-axios',
      desc: '此处是个轮子',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/placeholder.png',
      tech_stack: { typescript: 'latest' },
    },
    {
      id: 8,
      title: 'vue-mooker',
      link: 'https://github.com/Alfred-Lau/vue-mocker-testcase',
      desc: 'Vue 的 mock 插件，首期支持接口测试功能',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/mofcker.png',
      tech_stack: { vue: 'latest' },
    },
    {
      id: 9,
      title: '模板引擎',
      link: 'https://github.com/Alfred-Lau/fast-template-engine',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/template-engine.png',
      desc: '基于 es6 字符串实现模板引擎',
      tech_stack: { node: 'latest', cli: '' },
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
          />
        );
      })}
    </div>
  );
}

function ExperenceComponent() {
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
      content: '自强不息，止于至善',
      tag: '',
    },
    {
      id: 2,
      title: '政采云有限公司',
      duration: '2018-02 至 2020-07',
      content: `业务上从事支付和项目采购，商品协议相关开发工作
      技术建设进行影响力建设和工程化相关的产出，主要包括:
      前端对外小报全链路【包括前后端，运维部署，React SSR，定时任务，命令行数据提取工具等】
      移动端脚手架【落地于移动端开发】
      命令行脚手架【落地于小组内使用】
      以及基于其上的 GUI 工具【后续交由他人维护】`,
      tag: '',
    },
    {
      id: 3,
      title: '蚂蚁集团 - 体验技术部',
      duration: '2020-07 至 2020-11',
      content: '自强不息，止于至善',
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
  const [blogs, setBlogs] = React.useState<MainSiteApi.Blog[]>([]);

  useAsyncEffect(async () => {
    const blogs = await queryBlogs();

    setBlogs(blogs);
  }, []);
  return (
    <div>
      <List data={blogs} showMore />
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
    title: 'PIECEWORK',
    subtitle: 'SPARE TIME PROJECT',
    component: PieceWorkComponent,
    anchor: 'projects',
  },
  {
    sort: 3,
    title: 'TOOL',
    subtitle: 'ENGINEERED TOOL',
    component: EngineeredToolComponent,
    anchor: 'tools',
  },
  {
    sort: 4,
    title: 'EXPERIENCE',
    subtitle: 'MY EXPERIENCE',
    component: ExperenceComponent,
    anchor: 'experience',
  },
  {
    sort: 5,
    title: 'BLOG',
    subtitle: 'LATEST BLOG',
    component: BlogComponent,
    anchor: 'rethink',
  },
];

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

      <footer className={styles.contentFooter}>
        ©2020 - 现在 烽火彼岸 | Alfred-Lau All rights reserved
      </footer>
    </div>
  );
}

export default Content;
