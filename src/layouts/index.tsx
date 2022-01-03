import React from 'react';
import MediaQuery from 'react-responsive';
import { Footer, Nav } from '@tiangongkit/react-component';
import styles from './index.less';
import { MIN_WIDTH } from '@/constants/varibles';
import { BreadcrumbNavigation } from '@/components/BreadcrumbNavigation';
import FixedHeader from '@/components/FixedHeader';

const IndexLayout: React.FC = (props) => {
  const menus = [
    {
      id: 0,
      title: '技术赋能产品',
      link: '',
      items: ['产品矩阵', '技术体系', '解决方案'],
    },
    { id: 1, title: '花叶世界', link: '', items: ['团队管理', '个体感悟'] },
    { id: 2, title: '人生逆旅', link: '', items: ['时间线'] },
  ];
  return (
    <div className={styles.layout}>
      <MediaQuery minWidth={MIN_WIDTH}>
        <FixedHeader>
          <header className={styles.header}>
            <Nav
              menus={menus}
              logo="https://lazy-minus-your-intelligence.com/assets/avatar.png"
            >
              <span>冯唐易老李广难封</span>
            </Nav>
          </header>
        </FixedHeader>
      </MediaQuery>
      <MediaQuery maxWidth={MIN_WIDTH - 1}>
        <BreadcrumbNavigation />
      </MediaQuery>

      {props.children}
      <Footer />
    </div>
  );
};
export default IndexLayout;
