import React from 'react';
import { Nav, Footer } from '@tiangongkit/react-component';

import { useHistory } from 'umi';
import styles from './index.less';

const IndexLayout: React.FC = (props) => {
  const menus = [
    { id: 0, title: '技术体系', link: '', items: ['产品', '服务'] },
    { id: 1, title: '团队管理', link: '', items: ['理财', '油腻'] },
    { id: 2, title: '人生逆旅', link: '', items: ['慈善', '春风十里'] },
  ];
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Nav
          menus={menus}
          logo="https://lazy-minus-your-intelligence.com/assets/avatar.png"
        >
          <span>冯唐易老李广难封</span>
        </Nav>
      </header>
      {props.children}
      <Footer />
    </div>
  );
};
export default IndexLayout;
