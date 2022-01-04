import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';
import { Footer } from '@tiangongkit/react-component';
import styles from './index.less';
import { MIN_WIDTH } from '@/constants/varibles';
import { BreadcrumbNavigation } from '@/components/BreadcrumbNavigation';
import FixedHeader from '@/components/FixedHeader';
import Nav from '@/components/Nav';
import { queryUserInfo } from '@/services/User';

const IndexLayout: React.FC = (props) => {
  const [user, setUser] = useState({});

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

  useEffect(() => {
    queryUserInfo().then((user) => {
      if (user) {
        window.user = user;
        setUser(user);
      }
    });
  }, []);

  return (
    <div className={styles.layout}>
      <MediaQuery minWidth={MIN_WIDTH}>
        <FixedHeader>
          <header className={styles.header}>
            <Nav
              menus={menus}
              logo="https://lazy-minus-your-intelligence.com/assets/avatar.png"
              user={user}
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
