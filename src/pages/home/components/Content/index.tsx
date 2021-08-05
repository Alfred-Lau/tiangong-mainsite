import styles from './index.less';
import Layer from '@/components/layer';
import FlipCard from '@/components/flipcard';
import ReflectCard from '@/components/ReflectCard';

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
          千帐， 鄙人千帐，生于塞上，游学于迤逦之乡，定居于人间天堂~
        </div>
        <div className={styles.long}>
          『自强不息，止于至善』『红专并进，理实交融』这些朴实凝萃的校训流淌我身，四年本科生涯、三年研究生涯，良师益友收获颇多~
          前有软工查软件系统之宏著、后学信安观程序于微，科班出身，愿工程改变世界，更喜洞悉真知~
          工作两载，扎根杭城，累哉累哉，自知其中快乐~
        </div>
        <div className={styles.section}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <span className={styles.label}>旧版个人网站:</span>
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
                十年挑灯看剑
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PieceWorkComponent() {
  const cards = [
    {
      id: 0,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 1,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 2,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 3,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 4,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 5,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 6,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
  ];
  return (
    <div className={styles.piecework}>
      {cards.map((card) => {
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
      id: 0,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 1,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 2,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 3,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 4,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 5,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
    },
    {
      id: 6,
      title: '商城应用',
      desc: '使用 Vue 2.6.11 开发的电商 PC 网站',
      tags: ['vue', 'business'],
      link: 'http://xiaomimall.lazy-minus-your-intelligence.com/#/',
      cover:
        'https://lazy-minus-your-intelligence.oss-cn-qingdao.aliyuncs.com/blog/bgimgs/xiaomimall.png',
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

const CONTENT_ARRAY = [
  {
    sort: 1,
    title: 'INFORMATION',
    subtitle: 'ABOUT ME',
    component: AboutMeComponent,
  },
  {
    sort: 2,
    title: 'PIECEWORK',
    subtitle: 'SPARE TIME PROJECT',
    component: PieceWorkComponent,
  },
  {
    sort: 3,
    title: 'TOOL',
    subtitle: 'ENGINEERED TOOL',
    component: EngineeredToolComponent,
  },
  {
    sort: 4,
    title: 'EXPERIENCE',
    subtitle: 'MY EXPERIENCE',
    component: AboutMeComponent,
  },
  {
    sort: 5,
    title: 'BLOG',
    subtitle: 'LATEST BLOG',
    component: AboutMeComponent,
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
          >
            <content.component></content.component>
          </Layer>
        );
      })}

      <footer className={styles.contentFooter}>
        ©2020 - 现在 千帐 | Alfred-Lau All rights reserved
      </footer>
    </div>
  );
}

export default Content;
