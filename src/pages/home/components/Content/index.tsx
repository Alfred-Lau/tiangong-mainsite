import styles from './index.less';
import Layer from '@/components/layer';

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
        <div className="slogan">ABOUT ME</div>
        千帐， 鄙人千帐，生于塞上，游学于迤逦之乡，定居于人间天堂~
        『自强不息，止于至善』『红专并进，理实交融』这些朴实凝萃的校训流淌我身，四年本科生涯、三年研究生涯，良师益友收获颇多~
        前有软工查软件系统之宏著、后学信安观程序于微，科班出身，愿工程改变世界，更喜洞悉真知~
        工作两载，扎根杭城，累哉累哉，自知其中快乐~
        旧版个人网站:old.lazy-minus-your-intelligence.com/
        专栏:juejin.im/user/57fd0345816dfa0056cf086d
        项目:https://github.com/Alfred-Lau 公众号:十年挑灯看剑
      </div>
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
    component: AboutMeComponent,
  },
  {
    sort: 3,
    title: 'TOOL',
    subtitle: 'ENGINEERED TOOL',
    component: AboutMeComponent,
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
