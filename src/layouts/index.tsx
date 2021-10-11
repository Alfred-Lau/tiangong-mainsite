import React from 'react';
import { useHistory } from 'umi';
import styles from './index.less';

const IndexLayout: React.FC = (props) => {
  const history = useHistory();
  return (
    <div className={styles.layout}>
      <header className={styles.header} onClick={() => history.push('/')}>
        我是头部
      </header>
      {props.children}
    </div>
  );
};
export default IndexLayout;
